// src/components/Input/index.tsx

"use client";

import { useState } from "react";
import { DeleteIconButton } from "./DeleteIconButton";

interface InputProps {
  id?: string;
  name?: string;
  defaultValue?: string;
  type?: "text" | "password" | "email" | "number"; // 필요한 타입을 추가할 수 있습니다.
  placeholder?: string;
  // 추가적인 props가 필요하다면 여기에 정의할 수 있습니다.
  isError?: boolean;
  errorMessage?: string;
}
export const Input = ({
  id,
  name,
  defaultValue = "", //초기값임 '는
  type = "text",
  placeholder,
  isError = true,
  errorMessage,
}: InputProps) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <div className="relative inline-block w-full">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 pr-8"
        />
        {value && (
          <button
            type="button"
            onClick={() => setValue("")}
            className="absolute top-1/2 right-2 -translate-y-1/2 transform cursor-pointer"
            aria-label="입력값 지우기"
          >
            <DeleteIconButton />
          </button>
        )}
      </div>
      {isError && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </>
  );
};
