import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Kolambekar",
  description: "Yash Kolambekar's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
