import { render, screen } from "@testing-library/react";
import SignupForm from "./index";

describe("이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링 되는지 확인", () => {
  test("이메일 입력 필드가 제대로 렌더링 되는지 확인", () => {
    render(<SignupForm />);

    const emailByLabelText = screen.getByLabelText("이메일");
    expect(emailByLabelText).toBeInTheDocument();
  });

  test("비밀번호 입력 필드가 제대로 렌더링 되는지 확인", () => {
    render(<SignupForm />);

    const passwordByLabelText = screen.getByLabelText("비밀번호");
    expect(passwordByLabelText).toBeInTheDocument();
  });

  test("비밀번호 확인 입력 필드가 제대로 렌더링 되는지 확인", () => {
    render(<SignupForm />);

    const passwordConfirmByLabelText = screen.getByLabelText("비밀번호 확인");
    expect(passwordConfirmByLabelText).toBeInTheDocument();
  });
});

describe("비밀번호, 비밀번호 확인 입력 필드의 타입이 password인지 확인 ", () => {
  test("비밀번호 입력 필드의 타입이 password인지 확인", () => {
    render(<SignupForm />);

    const typeByPlaceholder = screen.getByPlaceholderText("비밀번호");
    expect(typeByPlaceholder).toHaveAttribute("type", "password");
  });

  test("비밀번호 확인 입력 필드의 타입이 password인지 확인", () => {
    render(<SignupForm />);

    const typeByPlaceholder = screen.getByPlaceholderText("비밀번호 확인");
    expect(typeByPlaceholder).toHaveAttribute("type", "password");
  });
});

describe("회원가입 버튼이 제대로 렌더링 되는지 확인", () => {
  test("회원가입 버튼이 제대로 렌더링 되는지 확인", () => {
    render(<SignupForm />);

    const signupButton = screen.getByRole("button", { name: "회원가입" });
    expect(signupButton).toBeInTheDocument();
  });
});
