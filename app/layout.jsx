import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "AI-POP - AI POP 이미지 생성 웹사이트",
  description: "AI POP 이미지 생성 웹사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full">
      <body className={`w-full h-full antialiased`}>
        <div className="page-shell">
          <div className="page-content">
            <div className="page-tabs">
              <div className="tabs page-tab-inner" id="menuTab">
                <ul className="level1 static">
                  <li role="menuitem">
                    <Link href="/airequest_pop" className="level1 tab">AI POP 만들기</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/airequest_pc" className="level1 tab">프라이스카드 만들기</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/aiImage" className="level1 tab">AI이미지관리</Link>
                  </li>
                  <li role="menuitem">
                    <Link href="/aiStatics" className="level1 tab">AI이용현황</Link>
                  </li>
                </ul>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
