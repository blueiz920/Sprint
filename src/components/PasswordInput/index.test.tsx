// src/components/PasswordInput/index.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { PasswordInput } from "./index";

test("초기 상태에서 비밀번호가 숨겨져 있고(type='password'), '보기' 버튼이 보이는지 확인한다.", () => {
  render(<PasswordInput />);

  const passwordToggle = screen.getByRole("button", { name: "보기" });
  const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요.");

  expect(passwordToggle).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("'보기' 버튼을 클릭하면 비밀번호가 보이고(type='text'), 버튼 텍스트가 '숨기기'로 변경되는지 확인한다.", () => {
  render(<PasswordInput />);

  const passwordToggle = screen.getByRole("button", { name: "보기" });
  fireEvent.click(passwordToggle);
  const input = screen.getByPlaceholderText("비밀번호를 입력하세요.");
  expect(input).toHaveAttribute("type", "text");
  expect(passwordToggle.textContent).toBe("숨기기");
});

test("'숨기기' 버튼을 클릭하면 다시 비밀번호가 숨겨지고(type='password'), 버튼 텍스트가 '보기'로 변경되는지 확인한다.", () => {
  render(<PasswordInput />);

  const passwordToggle = screen.getByRole("button", { name: "보기" });
  fireEvent.click(passwordToggle);
  fireEvent.click(passwordToggle);
  const input = screen.getByPlaceholderText("비밀번호를 입력하세요.");

  expect(input).toHaveAttribute("type", "password");
  expect(passwordToggle.textContent).toBe("보기");
});
