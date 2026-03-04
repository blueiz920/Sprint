import { render, screen } from "@testing-library/react";
import LoginForm from "./index";

test("로그인 폼이 올바르게 렌더링 되는지 확인", () => {
  render(<LoginForm />);

  //라벨로 입력(input) 요소 찾기

  const emailByLabel = screen.getByLabelText("이메일:");

  //플레이스홀더로 입력(input) 요소 찾기

  const emailByPlaceholder = screen.getByPlaceholderText("이메일을 입력하세요");

  //역할로 버튼 찾기 (제일 추천- 유저입장에서 '버튼'을 클릭하므로)

  const loginButton = screen.getByRole("button", { name: "로그인" });

  //테스트  id로 요소 찾기

  const emailById = screen.getByTestId("email-input");

  //모든 요소가 화면에 있는지

  expect(emailByLabel).toBeInTheDocument();
  expect(emailByPlaceholder).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(emailById).toBeInTheDocument();

  //다른방법으로 가져온 요소들이 실제로 동일한 요소인지 확인

  expect(emailByLabel).toBe(emailByPlaceholder);
  expect(emailByPlaceholder).toBe(emailById);
});
