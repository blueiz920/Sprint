// src/components/Counter/index.tsx
"use client";

import { useState } from "react";

export const Counter = () => {
  const initialCount = 0; // 초기 카운트 값
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialCount);
  return (
    <div>
      <button
        className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
        onClick={decrement}
      >
        -
      </button>
      <span className="mx-4 mt-4 text-center text-xl font-bold">{count}</span>

      <button
        className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
        onClick={increment}
      >
        +
      </button>
      <div>
        <button
          className="mt-4 rounded bg-gray-300 px-4 py-2 text-black"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

//커스텀 훅 vs 함수
//커스텀 훅: 리액트 훅을 사용한 함수
//함수: 그냥 함수(계산, 날짜 포맷, 유효성 검사)

// 훅은 클라이언트 컴포넌트/ 컴포넌트/ 또다른 커스텀 훅 내에서 쓸 수 있음
