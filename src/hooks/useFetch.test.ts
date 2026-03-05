import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "./useFetch";

describe("useFetch 테스트", () => {
  test("데이터를 성공적으로 가져오면 data state에 잘 담기는지 확인", async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ name: "권혁징", mbti: "INFJ" }),
    });
    const { result } = renderHook(() =>
      useFetch("https://jsonplaceholder.typicode.com/posts"),
    ); //실제로 호출하면 낭비이므로 모킹 ㄱㄱ

    //act: state 변경을 강제로 시킬 때 , act안에는 state 변경하는 함수handleChange같은놈들 옴
    //waitFor: 비동기 기다림 + state 변경 , 걍 조건을 걸어놓고 expect ?? 성공할때까지 여러번 시도, 몇초뒤 실패

    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(true);

    //데이터 요청이 완료될 때까지 기다림
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual({
        name: "권혁징",
        mbti: "INFJ",
      });
    });
  });

  test("서버 에러 처리가 정상적으로 작동하는지 테스트", async () => {
    // 일단 fetch 는 성공했기 때문에 resolvedValue로 함
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });
    const { result } = renderHook(() => useFetch("https://api.example.com"));
    // 로딩이 끝날 때따기 전까지 기다림
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe("네트워크 응답이 정상적이지 않습니다");
  });

  test("네트워크 에러 시 error 상태가 업데이트 되는지 확인", async () => {
    globalThis.fetch = jest
      .fn()
      .mockRejectedValue(new Error("failed to fetch")); //fetch에 실패했음으로 rejectedvalue로
    const { result } = renderHook(() => useFetch("https://api.example.com"));

    //초기값 확인
    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    //로딩이 끝날 때까지 기다림
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    expect(result.current.error).toBe("failed to fetch");
  });
});
