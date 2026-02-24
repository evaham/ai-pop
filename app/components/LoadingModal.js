// 로딩 모달 컴포넌트

'use client';

import SvgLoader from './SvgLoader';

export default function LoadingModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60"
      role="dialog"
      aria-modal="true"
      aria-label="이미지 생성 중"
      onClick={onClose}
    >
      <div
        className="w-[90%] max-w-sm rounded-2xl bg-white shadow-2xl p-6 text-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-center">
          <SvgLoader className="h-16 w-16" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">이미지를 생성을 시작합니다</h3>
        <p className="mt-2 text-sm text-gray-500">잠시만 기다려주세요.</p>
      </div>
    </div>
  );
}
