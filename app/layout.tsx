import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AryZam — Quantum Risk Intelligence",
  description: "AryZam discovers every cryptographic asset across your cloud, code and identity systems — scored by quantum risk, aligned to DORA and NIS2.",
};

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
