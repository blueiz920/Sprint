"use client";

import * as m from "motion/react-m";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <m.div className="text-center">
      <m.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-3xl font-bold"
      >
        테스트 결과
      </m.h2>
      <m.div
        initial={{ opacity: 0.1, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-lg bg-white p-6 shadow-lg"
      >
        {answers.map((answer, index) => (
          <m.p
            key={index}
            initial={{ opacity: 0.1, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-2"
          >
            질문 {index + 1}: {answer}
          </m.p>
        ))}
      </m.div>
    </m.div>
  );
}
