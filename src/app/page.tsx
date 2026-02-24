"use client";

import { motion, useMotionValue, useSpring } from "motion/react";

export default function Home() {
  const openMotionValue = useMotionValue(0);

  // useSpring 훅을 사용하여 부드러운 애니메이션 효과 생성
  const springValue = useSpring(openMotionValue, {
    stiffness: 100, // 강성 (높을수록 더 탄력적)
    damping: 10, // 감쇠 (낮을수록 더 오래 튕김)
  });

  // 상태 변경 시 스프링 값 업데이트
  const toggleBox = () => {
    const newMotionValue = openMotionValue.get() === 0 ? 1 : 0;
    openMotionValue.set(newMotionValue);
    springValue.set(newMotionValue); // 토글 시 0 또는 1로 설정
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* 스프링 값에 따라 움직이는 박스 */}
      <motion.div
        className="h-24 w-24 rounded-md bg-blue-500"
        style={{
          scale: springValue,
        }}
      />

      <button
        onClick={toggleBox}
        className="mt-10 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        스프링 버튼
      </button>
    </div>
  );
}
