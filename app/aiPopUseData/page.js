'use client';

import { useEffect, useState } from 'react';

const prompts = [
  '여름 행사 배너 이미지 생성',
  '신규 상품 소개 POP 디자인',
  '주말 특가 프로모션 문구',
  '신선식품 할인 배너 요청',
  '간편식 모음 행사 이미지',
  '타임세일 팝업 배너',
  '봄 시즌 한정 이벤트',
  '매장 오픈 프로모션',
  '가격표 강조형 POP',
  '배송비 무료 안내 이미지'
];

const results = ['생성완료', '실패'];
const tsMoneyValues = [-300, -500, -700, -1000];
const tsPointValues = [0, -200, -500, -1000];

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
const pad2 = (value) => String(value).padStart(2, '0');
const randomDate = () => {
  const year = 2024;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${year}-${pad2(month)}-${pad2(day)} ${pad2(hour)}:${pad2(minute)}`;
};

const generateItems = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    createdAt: randomDate(),
    prompt: getRandomItem(prompts),
    result: getRandomItem(results),
    tsMoney: getRandomItem(tsMoneyValues),
    tsPoint: getRandomItem(tsPointValues)
  }));

export default function AiPopUseData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(generateItems(10));
  }, []);

  return (
    <>
      <div className="flex-1 relative flex flex-col px-4 bg-white">
        <div className="flex flex-wrap gap-1 px-2 py-1.5 bg-gray-500/80 text-xs">
          <span className="flex items-center h-6.5 text-white">생성일</span>
          <input type="text" className="h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white" />
          <span className="flex items-center h-6.5 text-white">~</span>
          <input type="text" className="h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white" />
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">1개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">3개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-gray-600 rounded-xs text-white bg-gray-500 inset-shadow-xs inset-shadow-white/50 active:bg-gray-700/80 active:inset-shadow-none hover:bg-gray-500/80 cursor-pointer">6개월</button>
          <button className="inline-flex items-center h-6.5 px-2.5 border border-blue-600 rounded-xs text-white bg-blue-500 inset-shadow-xs inset-shadow-white/50 active:bg-blue-700/80 active:inset-shadow-none hover:bg-blue-500/80 cursor-pointer">조회</button>
        </div>
        <div className="flex flex-wrap gap-1.5 px-2 py-1.5 border border-gray-200 bg-gray-100 text-xs">
          <span className="flex items-center h-6.5 text-gray-700">결과</span>
          <select className="h-6.5 px-1 border border-gray-600/70 rounded-xs bg-white">
            <option value="">전체</option>
            <option value="success">성공</option>
            <option value="failure">실패</option>
          </select>
        </div>
        <div className="flex items-center gap-4 pt-3.5 pb-2.5 text-sm">
          <dl className="flex items-center text-gray-400">
            <dt className="mr-2 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">누적 생성건수</dt>
            <dd>123건</dd>
          </dl>
          <dl className="flex items-center text-gray-400">
            <dt className="mr-2 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">총 결제 TS머니</dt>
            <dd>4,560</dd>
            <dd>.0</dd>
          </dl>
          <dl className="flex items-center text-gray-400">
            <dt className="mr-2 before:content-['•'] before:mr-1 after:content-[':'] after:ml-1">총 결제 TS포인트</dt>
            <dd>789,000</dd>
            <dd>.0</dd>
          </dl>
          <div className="flex gap-1 ml-auto">
            <select className="flex items-center border border-gray-400 rounded-xs h-5 text-xs text-gray-600 bg-blue-100/80">
              <option value="">생성된 이미지</option>
              <option value="prompt">프롬프트</option>
              <option value="result">결과</option>
            </select>
            <button className="inline-flex items-center h-5 px-1 border border-blue-500 rounded-xs text-xs text-blue-600 active:bg-blue-100 hover:bg-blue-50 cursor-pointer">엑셀다운</button>
          </div>
        </div>
        <div>
          <div className="overflow-auto min-h-100 border border-gray-300 bg-gray-200">
            <table className="hover overwidth table-auto -ml-px -mt-px mb-12 border border-gray-300 text-[13px] whitespace-nowrap">
              <thead className="[&_th]:p-0.5 [&_th]:border [&_th]:border-gray-300/70 [&_th]:text-gray-500 [&_th]:font-normal [&_th]:bg-gray-50">
                <tr>
                  <th className="px-3 py-2">No.</th>
                  <th className="px-3 py-2">이미지생성일</th>
                  <th className="px-3 py-2">내용</th>
                  <th className="px-3 py-2">결과</th>
                  <th className="px-3 py-2">결제 TS머니</th>
                  <th className="px-3 py-2">결제 TS포인트</th>
                </tr>
              </thead>
              <tbody className="[&_th,&_td]:px-1 [&_th,&_td]:py-0.5 [&_th,&_td]:border [&_th,&_td]:border-gray-300/70">
                {items.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-blue-50">
                    <td className="px-3 py-2">{item.id}</td>
                    <td className="px-3 py-2">{item.createdAt}</td>
                    <td className="px-3 py-2">{item.prompt}</td>
                    <td className="px-3 py-2">{item.result}</td>
                    <td className="px-3 py-2 text-right">{item.tsMoney}</td>
                    <td className="px-3 py-2 text-right">{item.tsPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination flex flex-col my-5 mt-auto">
          <ul className="pagination__list flex gap-1 items-center mx-auto">
            <li className="first paginate_button  disabled" data-dt-idx="1">
              <a href="#pageLink" aria-disabled="true" className="flex items-center justify-center min-w-8 h-7 border border-gray-300 rounded-sm fill-gray-600 aria-disabled:border-gray-100 aria-disabled:bg-gray-100 aria-disabled:fill-gray-300 aria-disabled:pointer-events-none hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M445-253.85 218.85-480 445-706.15 487.15-664 303.77-480l183.38 184L445-253.85Zm254 0L472.85-480 699-706.15 741.15-664 557.77-480l183.38 184L699-253.85Z"></path></svg>
                <span className="sr-only">처음으로</span>
              </a>
            </li>
            <li className="prev paginate_button  disabled" data-dt-idx="0">
              <a href="#pageLink" aria-disabled="true" className="flex items-center justify-center min-w-8 h-7 border border-gray-300 rounded-sm fill-gray-600 aria-disabled:border-gray-100 aria-disabled:bg-gray-100 aria-disabled:fill-gray-300 aria-disabled:pointer-events-none hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"></path></svg>
                <span className="sr-only">앞으로</span>
              </a>
            </li>
            <li className="paginate_button  active" data-dt-idx="1">
              <a href="#pageLink" aria-current="true" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">1</a>
            </li>
            <li className="paginate_button " data-dt-idx="2">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">2</a>
            </li>
            <li className="paginate_button " data-dt-idx="3">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">3</a>
            </li>
            <li className="paginate_button " data-dt-idx="4">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">4</a>
            </li>
            <li className="paginate_button " data-dt-idx="5">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">5</a>
            </li>
            <li className="paginate_button " data-dt-idx="6">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">6</a>
            </li>
            <li className="paginate_button " data-dt-idx="7">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">7</a>
            </li>
            <li className="paginate_button " data-dt-idx="8">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">8</a>
            </li>
            <li className="paginate_button " data-dt-idx="9">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">9</a>
            </li>
            <li className="paginate_button " data-dt-idx="10">
              <a href="#pageLink" aria-current="false" className="flex items-center justify-center min-w-7 h-7 px-1 border border-gray-300 rounded-sm fill-gray-600 aria-current:border-transparent aria-current:bg-blue-700/80 aria-current:font-bold aria-current:text-white aria-current:pointer-events-none hover:border-blue-500">10</a>
            </li>
            <li className="next paginate_button " data-dt-idx="11">
              <a href="#pageLink" aria-disabled="false" className="flex items-center justify-center min-w-8 h-7 border border-gray-300 rounded-sm fill-gray-600 aria-disabled:border-gray-100 aria-disabled:bg-gray-100 aria-disabled:fill-gray-300 aria-disabled:pointer-events-none hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"></path></svg>
                <span className="sr-only">뒤로</span>
              </a>
            </li>
            <li className="last paginate_button " data-dt-idx="245">
              <a href="#pageLink" aria-disabled="false" className="flex items-center justify-center min-w-8 h-7 border border-gray-300 rounded-sm fill-gray-600 aria-disabled:border-gray-100 aria-disabled:bg-gray-100 aria-disabled:fill-gray-300 aria-disabled:pointer-events-none hover:border-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M402.23-480 218.85-664 261-706.15 487.15-480 261-253.85 218.85-296l183.38-184Zm254 0L472.85-664 515-706.15 741.15-480 515-253.85 472.85-296l183.38-184Z"></path></svg>
                <span className="sr-only">맨뒤로</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
