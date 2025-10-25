import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taahirah-OS",
  description: "Interactive portfolio OS inspired by the 1984 Macintosh desktop.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#E5E5E5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#E5E5E5] text-black antialiased"
        style={{
          fontFamily: "Chicago, 'Geneva', 'Monaco', 'MS Sans Serif', sans-serif",
          backgroundImage: "url('/patterns/mac-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
