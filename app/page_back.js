'use client';

import { useMemo, useState } from 'react';

export default function Home() {
	const [prompt, setPrompt] = useState('');
	const charCount = useMemo(() => prompt.length, [prompt]);

	return (
		<div
			className="min-h-screen flex flex-col"
			style={{
				background:
					'radial-gradient(1200px 600px at 10% 10%, #0b0f1c 0%, #111827 45%, #0f172a 70%, #020617 100%)',
			}}
		>
      <div className="sticky top-0 w-full flex items-center justify-center px-5 py-2 border-b bg-slate-900">
        <div>
          <p className="text-xs text-slate-400">
            test 버전
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-100">
            AI POP 생성하기
          </h1>
        </div>
      </div>
			<div className="flex-1 flex flex-col w-full max-w-3xl mx-auto px-4 py-10">
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-xl font-bold text-slate-50 text-center">쉽게 POP 이미지를 만들어보세요</p>
        </div>
				<div className="rounded-3xl p-6 md:p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] backdrop-blur">
					<div className="rounded-2xl border border-slate-700/70 bg-slate-950/60 shadow-sm transition focus-within:border-slate-500 focus-within:ring-4 focus-within:ring-slate-800">
						<textarea
							value={prompt}
							onChange={(event) => setPrompt(event.target.value)}
							placeholder="생성할 이미지를 설명하세요"
							rows={8}
							className="custom-scrollbar is-dark w-full resize-none bg-transparent px-5 py-4 pb-6 text-base text-slate-100 outline-none placeholder:text-slate-100"
						/>
						<div className="flex items-center justify-between gap-3 border-t border-slate-800/70 px-5 py-3">
              <button
                type="button"
                className="flex items-center justify-center w-38 h-12 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
                onClick={() => setPrompt('')}
              >
                Clear
              </button>
							<div className="flex items-center gap-2">

								<button
									type="button"
									disabled={!prompt.trim()}
									className="flex items-center justify-center rounded-full w-30 h-12 bg-blue-500/90 font-semibold text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700"
								>
									만들기
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
