// src/app/layout.tsx

import "./globals.css";
import { initMocks } from "@/mocks";
initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
