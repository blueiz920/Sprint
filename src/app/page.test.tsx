import { render, screen } from "@testing-library/react";
import Home from "./page";

test("메인 페이지의 테스트가 올바르게 렌더링되는지 확인", () => {
  //함수 가져오기 ->테스트
  // 테스트 실행(npm run test)vs브라우저에서 확인(npm run dev)
  // react testing library -> 임시로 렌더링을 해주는 기능
  // 1. Home 컴포넌트를 렌더링한다.
  render(<Home />);

  // 2. "컴포넌트 테스트 연습하기" 텍스트를 가진 요소를 찾는다. (screen으로)
  // 그리고  screen.어쩌구로 쿼리를 이용해 요소를 가져온다.
  const element = screen.getByText("컴포넌트 테스트 연습하기");

  // 3. 해당 요소가 화면에 실제로 있는지 검증한다.
  expect(element).toBeInTheDocument();
});
