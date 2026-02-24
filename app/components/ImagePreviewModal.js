// 이미지 미리보기 모달 컴포넌트

'use client';

export default function ImagePreviewModal({ imageUrl, onClose }) {
  if (!imageUrl) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60"
      role="dialog"
      aria-modal="true"
      aria-label="이미지 크게보기"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-[90%] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <div className="font-semibold text-gray-800">이미지 미리보기</div>
          <button
            type="button"
            className="rounded-md px-2 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-700" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg>
          </button>
        </div>
        <div className="flex max-h-[75vh] items-center justify-center bg-gray-50 p-4">
          <img src={imageUrl} alt="확대 이미지" className="max-h-[70vh] w-auto max-w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
