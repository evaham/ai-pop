import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI-POP - AI POP 이미지 생성 웹사이트",
  description: "AI POP 이미지 생성 웹사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen sm:h-screen overflow-y-auto sm:overflow-hidden flex flex-col p-4 md:px-6 transition-colors duration-300 bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
