import { act, renderHook } from "@testing-library/react";
import { useInputs } from "./useInputs";

describe("useInputs 테스트", () => {
  test("useInputs 훅의 파라미터 값이 초기값으로 잘 세팅되는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        name: "",
        nickname: "",
      }),
    );
    expect(result.current.values).toEqual({
      name: "",
      nickname: "",
    });
  });

  test("handleChage 함수가 값을 올바르게 업데이트 하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        email: "",
        password: "",
      }),
    );

    const event = {
      target: {
        name: "email",
        value: "test@naver.com", //email의 값: test
      },
    } as React.ChangeEvent<HTMLInputElement>;

    const passwordEvent = {
      target: {
        name: "password",
        value: "test", //password의 값: test
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => result.current.handleChange(event));
    act(() => result.current.handleChange(passwordEvent));

    expect(result.current.values.email).toBe("test@naver.com");
    expect(result.current.values.password).toBe("test");
    expect(result.current.values).toEqual({
      email: "test@naver.com",
      password: "test",
    });
  });

  test("handleDelete 함수가 특정 필드를 올바르게 삭제하는지 확인", () => {
    const { result } = renderHook(() =>
      useInputs({
        email: "testemail",
        password: "testpassword",
      }),
    );
    act(() => result.current.handleDelete("email"));
    expect(result.current.values.email).toBe("");
    expect(result.current.values.password).toBe("testpassword");
  });
});
