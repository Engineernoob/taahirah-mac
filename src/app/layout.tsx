import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taahirah-OS",
  description: "Interactive portfolio OS inspired by 1984 Macintosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
