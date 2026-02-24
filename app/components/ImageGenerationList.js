// AI 이미지 리스트 컴포넌트

'use client';

import SvgLoader from './SvgLoader';

export default function ImageGenerationList({ items, onOpenPreview }) {
  return (

    <ul className="flex flex-col divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="flex flex-col py-3">
          <div className="text-gray-600 font-semibold">{item.createdAt}</div>
          <p className="text-sm text-gray-500 leading-tight">{item.prompt}</p>
          <div className="mt-2">
            <div className="overflow-hidden flex flex-col w-36 h-34 border border-purple-200 rounded-xl bg-white">
              <div className="flex items-center justify-center w-full h-26 p-2">
                {item.status === 'loading' ? (
                  <SvgLoader className="svg-animation size-22" />
                ) : (
                  <img src={item.imageUrl} alt="생성된 이미지" className="max-w-full max-h-full object-cover" />
                )}
              </div>
              <div className="flex-1 flex items-center justify-center bg-purple-100 divide-x divide-purple-200">
                {item.status === 'loading' ? (
                  <p className="text-gray-700 text-sm">이미지 생성중</p>
                ) : (
                  <>
                    <button
                      className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer"
                      onClick={() => onOpenPreview(item.imageUrl)}
                    >
                      크게보기
                    </button>
                    <button className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer">
                      다운로드
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>

  );
}
