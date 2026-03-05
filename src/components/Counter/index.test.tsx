// src/hooks/useCounter.test.ts

import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter 테스트", () => {
  test("useCounter 훅의 파라미터 값이 초기값으로 잘 세팅되는지 확인", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);
  });

  test("increment 함수가 count 값을 1 증가시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(0));
    // 처음엔 count 값이 0
    expect(result.current.count).toBe(0);
    // 증가 실행
    act(() => result.current.increment());
    // 1로 변경됐는지 확인 --> 훅 내부 state 변경이므로, await해줘야할거같은데?
    // await screen.findBy~로 요소 찾아야하는데 훅 안에는 tag가 없으므로
    // act를 써야함!
    expect(result.current.count).toBe(1);
  });
  test("decrement 함수가 count를 1 감소시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(2));
    expect(result.current.count).toBe(2);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
  test("reset 함수가 count를 초기값으로 잘 세팅시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(2));

    expect(result.current.count).toBe(2);

    act(() => result.current.increment());

    expect(result.current.count).toBe(3);

    act(() => result.current.reset());

    expect(result.current.count).toBe(2);
  });
});
