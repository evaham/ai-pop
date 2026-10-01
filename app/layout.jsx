import "./globals.css";

export const metadata = {
  title: "AI-POP - AI POP 이미지 생성 웹사이트",
  description: "AI POP 이미지 생성 웹사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full">
      <body className={`w-full h-full bg-gray-50 antialiased`}>
        <div className="page-shell">
          <div className="page-content">
            <div className="page-tabs">
              <div className="tabs page-tab-inner" id="menuTab">
                <ul className="level1 static">
                  <li role="menuitem">
                    <a className="level1 tab" href="/ai-pop/airequest_pop" >AI POP
                      만들기</a>                </li>
                  <li role="menuitem">
                    <a className="level1 tab selected" href="/ai-pop/airequest_pc">프라이스카드 만들기</a>
                  </li>
                  <li role="menuitem">
                    <a className="level1 tab" href="/ai-pop/aiImage">AI이미지관리</a>
                  </li>
                  <li role="menuitem">
                    <a className="level1 tab" href="/ai-pop/aiStatics">AI이용현황</a>
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
