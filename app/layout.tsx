import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "403unlocker",
  description: "A Tools to freedom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <head>
        <link rel="icon" href="/assets/imgs/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
