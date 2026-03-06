import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const renderwithQueryClint = (component: React.ReactNode) => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });

  return render(
    <QueryClientProvider client={testQueryClient}>
      {component}
    </QueryClientProvider>,
  );
};

describe("메인 페이지 테스트", () => {
  describe("데이터 렌더링 테스트", () => {
    test("api 호출 시 로딩 상태가 잘 표시되는지 확인", () => {
      renderwithQueryClint(<Home />);
      const loadingElement = screen.getByText("Loading...");
      expect(loadingElement).toBeInTheDocument();
    });

    test("데이터가 성공적으로 로드되면 제목이 화면에 잘 나타나는지 확인", async () => {
      // 실제 API 호출 방지를 위한 모킹
      // 모킹을 하지 않으면 어떻게 서버를 켜야만 테스트가 동작합니다.
      const mockedPosts = [
        { id: 1, title: "테스트 제목", body: "테스트 본문" },
        { id: 2, title: "두번째 제목", body: "두번째 본문" },
      ];
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockedPosts),
      });
      renderwithQueryClint(<Home />);
      await waitFor(() => {
        const postItems = screen.getAllByRole("listitem");
        expect(postItems).toHaveLength(mockedPosts.length);

        expect(screen.getByText("1: 테스트 제목")).toBeInTheDocument();
        expect(screen.getByText("2: 두번째 제목")).toBeInTheDocument();
      });
    });

    test("api 호출 실패 시 에러 상태가 올바르게 표시되는지 확인", async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
      });
      renderwithQueryClint(<Home />);
      await waitFor(() => {
        const errorElement = screen.getByText(
          "서버에서 데이터를 가져오는 데 실패했습니다.",
        );
        expect(errorElement).toBeInTheDocument();
      });
    });
  });

  describe("게시물 생성 테스트", () => {
    test("새 게시물이 성공적으로 생성됐는지 확인", async () => {
      const mockedPosts = [
        { id: 1, title: "테스트 제목", body: "테스트 본문" },
        { id: 2, title: "두번째 제목", body: "두번째 본문" },
      ];

      const newPost = { id: 3, title: "새로운 제목", body: "새로운 본문" };

      globalThis.fetch = jest
        .fn()
        // 첫 번째: get 요청
        .mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValue(mockedPosts), //첫번째요청의 반환값
        })
        // 두 번째: post 요청
        .mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValue(newPost), // 두번재요청의 반환값
        })
        .mockResolvedValueOnce({
          ok: true,
          json: jest.fn().mockResolvedValue([...mockedPosts, newPost]), // 세번재요청의 반환값
        });

      renderwithQueryClint(<Home />);
      //잘 가져왔는지 확인
      await waitFor(() => {
        const postItems = screen.getAllByRole("listitem");
        expect(postItems).toHaveLength(mockedPosts.length);

        expect(screen.getByText("1: 테스트 제목")).toBeInTheDocument();
        expect(screen.getByText("2: 두번째 제목")).toBeInTheDocument();
      });

      //폼 입력

      const titleInput = screen.getByLabelText("제목");
      const bodyInput = screen.getByLabelText("본문");
      const submitButton = screen.getByRole("button", { name: "제출" });

      //제출
      fireEvent.change(titleInput, { target: { value: "새로운 제목" } });
      fireEvent.change(bodyInput, { target: { value: "새로운 본문" } });
      fireEvent.click(submitButton);

      // 새로운 게시물이 추가됐는지 확인한다.

      await waitFor(() => {
        const postItems = screen.getAllByRole("listitem");
        expect(postItems).toHaveLength(mockedPosts.length + 1);
      });
    });
  });
});
