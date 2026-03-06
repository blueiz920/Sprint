// src/providers/QueryProvider.tsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            // 필요에 따라 다른 옵션 설정
          },
        },
      }),
  );

  return (
    //children 안에 있는 모든 컴포넌트는 react query 의 캐싱을 활용한다. (useQuery, useMutation, useInfiniteQuery 등등)
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
