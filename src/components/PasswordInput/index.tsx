// src/components/PassowordInput/index.tsx

"use client";
import { useState } from "react";
// 1. 초기 상태에서 비밀번호가 숨겨져 있고(`type="password"`) '보기' 버튼이 보이는지 확인한다.
// 2. '보기' 버튼을 클릭하면 비밀번호가 보이고(`type='text'`), 버튼 텍스트가 '숨기기'로 변경됩니다.
// 3. '숨기기' 버튼을 클릭하면 다시 비밀번호가 숨겨지고(`type='password'`), 버튼 텍스트가 '보기'로 변경됩니다. (이때, 처음에 클릭을 통해 '보기' 버튼에서 '숨기기' 버튼으로 먼저 변경한 다음 테스트하세요.)
export const PasswordInput = () => {
  const [isPassword, setText] = useState(false);

  const handleTypeChange = () => {
    setText(!isPassword);
  };
  return (
    <div>
      <input
        type={isPassword ? "text" : "password"}
        placeholder="비밀번호를 입력하세요."
      />
      <button onClick={handleTypeChange}>
        {isPassword ? "숨기기" : "보기"}
      </button>
    </div>
  );
};
