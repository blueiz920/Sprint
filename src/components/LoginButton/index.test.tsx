import { fireEvent, render, screen } from "@testing-library/react";
import { LoginButton } from ".";
import { AuthContext, AuthProvider } from "@/contexts/AuthContext";

describe("로그인 버튼 테스트", () => {
  test("인증되지 않은 경우 로그인 버튼이 렌더링 되는지 테스트", () => {
    render(
      <AuthProvider>
        <LoginButton />
      </AuthProvider>,
    );

    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("bg-blue-500");
  });

  test("인증된 경우 로그아웃 버튼이 렌더링 되는지 테스트", () => {
    const authContextValue = {
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    };
    render(
      <AuthContext.Provider value={authContextValue}>
        <LoginButton />
      </AuthContext.Provider>,
    );

    const logoutButton = screen.getByRole("button", { name: "로그아웃" });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveClass("bg-red-500");
  });

  test("로그인 버튼을 클릭하면 login 함수가 실행된지 테스트", () => {
    render(
      <AuthProvider>
        <LoginButton />
      </AuthProvider>,
    );

    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveClass("bg-blue-500");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "로그아웃" });
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveClass("bg-red-500");
  });
});
