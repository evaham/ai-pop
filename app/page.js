'use client';

import { useEffect, useRef, useState } from 'react';

function SvgLoader({ className = '' }) {
  // const pathStyle = {
  //   transformBox: 'fill-box',
  //   transformOrigin: 'center'
  // };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='svg-animation size-40' width="90" height="90" viewBox="0 0 348 342" fill="none">
      <g>
        <path d="M183.373 175.102C183.373 170.369 184.784 166.91 187.605 164.726C190.427 162.541 193.75 161.449 197.573 161.449C201.396 161.449 204.718 162.541 207.54 164.726C210.361 166.91 211.772 170.369 211.772 175.102V271.906H183.373V175.102Z" fill="#AA3EFF"/>
        <path d="M106.431 172.781C107.796 168.958 110.117 166.137 113.394 164.316C116.762 162.405 120.312 161.449 124.044 161.449C127.503 161.449 130.825 162.405 134.011 164.316C137.288 166.228 139.563 169.049 140.838 172.781L176.473 271.906H146.436L141.111 254.976H106.021L100.833 271.906H71.3408L106.431 172.781ZM113.121 231.901H134.011L123.634 197.904L113.121 231.901Z" fill="#AA3EFF"/>
      </g>
      <path d="M225.596 80.9348C226.974 77.2108 232.241 77.2108 233.619 80.9348L241.633 102.593C242.066 103.763 242.989 104.687 244.16 105.12L265.818 113.134C269.542 114.512 269.542 119.779 265.818 121.157L244.16 129.171C242.989 129.604 242.066 130.528 241.633 131.698L233.619 153.356C232.241 157.08 226.974 157.08 225.596 153.356L217.582 131.698C217.148 130.528 216.225 129.604 215.054 129.171L193.397 121.157C189.673 119.779 189.673 114.512 193.397 113.134L215.054 105.12C216.225 104.687 217.148 103.763 217.582 102.593L225.596 80.9348Z" fill="#AA3EFF"/>
      <path d="M144.323 106.599C145.701 102.875 150.969 102.875 152.347 106.599L154.584 112.646C155.018 113.817 155.941 114.74 157.111 115.173L163.159 117.41C166.883 118.788 166.883 124.056 163.158 125.434L157.111 127.671C155.941 128.105 155.018 129.028 154.584 130.198L152.347 136.246C150.969 139.97 145.701 139.97 144.323 136.246L142.086 130.198C141.653 129.028 140.729 128.105 139.559 127.671L133.512 125.434C129.788 124.056 129.788 118.788 133.512 117.41L139.559 115.173C140.729 114.74 141.653 113.817 142.086 112.646L144.323 106.599Z" fill="#AA3EFF"/>
      <path d="M246.983 192.147C248.361 188.423 253.628 188.423 255.006 192.147L257.243 198.195C257.677 199.365 258.6 200.288 259.771 200.722L265.818 202.959C269.542 204.337 269.542 209.605 265.818 210.983L259.771 213.22C258.6 213.653 257.677 214.576 257.243 215.747L255.006 221.794C253.628 225.518 248.361 225.518 246.983 221.794L244.745 215.747C244.312 214.576 243.389 213.653 242.218 213.22L236.171 210.983C232.447 209.605 232.447 204.337 236.171 202.959L242.218 200.722C243.389 200.288 244.312 199.365 244.745 198.195L246.983 192.147Z" fill="#AA3EFF"/>
    </svg>
  );
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('최대 50% 할인');
  const [description, setDescription] = useState('지금 바로 확인하세요');
  const [bgColor, setBgColor] = useState('#FF6B6B');
  const [titleColor, setTitleColor] = useState('#FFFFFF');
  const [titleSize, setTitleSize] = useState(64);
  const [bgImageUrl, setBgImageUrl] = useState('');
  const [imageOpacity, setImageOpacity] = useState(100);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [tempImages, setTempImages] = useState([]);
  const [previewImageUrl, setPreviewImageUrl] = useState('');
  const fileInputRef = useRef(null);
 
  // 다크 모드 상태
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    return () => {
      tempImages.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, [tempImages]);

  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return;
    }

    const nextImages = files.map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setTempImages((prev) => [...prev, ...nextImages]);
    event.target.value = '';
  };

  const handleRemoveImage = (id) => {
    setTempImages((prev) => {
      const target = prev.find((image) => image.id === id);
      if (target) {
        URL.revokeObjectURL(target.url);
      }
      return prev.filter((image) => image.id !== id);
    });
  };

  const handleOpenPreview = (url) => {
    setPreviewImageUrl(url);
  };

  const handleClosePreview = () => {
    setPreviewImageUrl('');
  };

  const handleInsertSample = (text) => {
    setTitle(text);
  };

  return (
    <div className={`min-h-screen sm:h-screen overflow-y-auto sm:overflow-hidden flex flex-col p-4 md:px-6 transition-colors duration-300 bg-gray-100`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:h-full">
        <div className="relative flex flex-col items-center justify-between mb-1">
          <h1 className={`flex items-baseline mt-0 text-2xl font-bold text-center text-gray-800`}>
            <div className='w-10 h-10 mr-2 text-xs'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-10' width="206" height="202" viewBox="0 0 206 202" fill="none">
              <path d="M112.032 105.009C112.032 100.276 113.443 96.8167 116.265 94.6321C119.087 92.4475 122.409 91.3552 126.232 91.3552C130.055 91.3552 133.377 92.4475 136.199 94.6321C139.021 96.8167 140.432 100.276 140.432 105.009V201.813H112.032V105.009Z" fill="#AA3EFF"/>
              <path d="M35.0897 102.688C36.4551 98.8647 38.7762 96.043 42.0531 94.2225C45.4209 92.311 48.9709 91.3552 52.7029 91.3552C56.1618 91.3552 59.4841 92.311 62.67 94.2225C65.9468 96.134 68.2224 98.9557 69.4968 102.688L105.133 201.813H75.0947L69.7699 184.882H34.6801L29.4918 201.813H0L35.0897 102.688ZM41.78 161.808H62.67L52.2933 127.81L41.78 161.808Z" fill="#AA3EFF"/>
              <path d="M154.255 10.8412C155.633 7.11719 160.9 7.11718 162.278 10.8412L170.292 32.499C170.726 33.6698 171.649 34.5929 172.82 35.0261L194.477 43.0402C198.201 44.4183 198.201 49.6854 194.477 51.0635L172.82 59.0776C171.649 59.5108 170.726 60.4339 170.292 61.6047L162.278 83.2625C160.9 86.9865 155.633 86.9865 154.255 83.2625L146.241 61.6047C145.808 60.4339 144.885 59.5108 143.714 59.0776L122.056 51.0635C118.332 49.6854 118.332 44.4183 122.056 43.0402L143.714 35.0261C144.885 34.5929 145.808 33.6698 146.241 32.499L154.255 10.8412Z" fill="#AA3EFF"/>
              <path d="M72.9826 36.505C74.3606 32.781 79.6278 32.781 81.0058 36.505L83.2435 42.5521C83.6767 43.7229 84.5998 44.646 85.7706 45.0792L91.8177 47.3169C95.5417 48.6949 95.5417 53.9621 91.8177 55.3401L85.7706 57.5777C84.5998 58.0109 83.6767 58.934 83.2435 60.1049L81.0058 66.1519C79.6278 69.8759 74.3606 69.8759 72.9826 66.1519L70.745 60.1049C70.3118 58.934 69.3887 58.0109 68.2178 57.5777L62.1708 55.3401C58.4468 53.9621 58.4468 48.6949 62.1708 47.3169L68.2178 45.0792C69.3887 44.646 70.3118 43.7229 70.745 42.5521L72.9826 36.505Z" fill="#AA3EFF"/>
              <path d="M175.642 122.054C177.02 118.33 182.287 118.33 183.665 122.054L185.903 128.101C186.336 129.272 187.259 130.195 188.43 130.628L194.477 132.866C198.201 134.244 198.201 139.511 194.477 140.889L188.43 143.127C187.259 143.56 186.336 144.483 185.903 145.654L183.665 151.701C182.287 155.425 177.02 155.425 175.642 151.701L173.404 145.654C172.971 144.483 172.048 143.56 170.877 143.127L164.83 140.889C161.106 139.511 161.106 134.244 164.83 132.866L170.877 130.628C172.048 130.195 172.971 129.272 173.404 128.101L175.642 122.054Z" fill="#AA3EFF"/>
              </svg>
            </div>POP 생성하기
          </h1>
          {/* <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`absolute top-0 right-0 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              darkMode 
                ? 'bg-purple-700 text-purple-50 hover:bg-purple-600' 
                : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
            }`}
          >
            {darkMode ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                라이트 모드
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                다크 모드
              </>
            )}
          </button> */}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 flex-1 sm:overflow-hidden">
          {/* 제어 패널 */}
          <div className="sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden min-h-0 px-1.5 py-2">
            <div className={`flex-1 flex flex-col sm:overflow-y-auto rounded-2xl shadow-md p-4 bg-white`}>
              <h2 className={`font-semibold mb-3 text-gray-800`}>텍스트를 입력하여 이미지를 생성해보세요</h2>
              <div className="relative flex-1 flex flex-col rounded-xl border border-purple-200 bg-purple-50 px-2 py-2 shadow-sm transition-all duration-200 custom-scrollbar focus-within:ring-2 focus-within:ring-purple-500">
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  rows={2}
                  placeholder="생성 할 이미지를 설명하세요."
                  className="flex-1 w-full h-full resize-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                />
                {tempImages.length > 0 && (
                  <div className="-m-2 mt-0 bg-purple-100 border-t border-purple-200">
                    <div className="p-2 flex flex-wrap gap-3">
                      {tempImages.map((image) => (
                        <div key={image.id} className="relative h-16 w-16">
                          <div className="h-16 w-16 overflow-hidden rounded-lg border border-purple-200 bg-white">
                            <img src={image.url} alt={image.name} className="h-full w-full object-cover" />
                          </div>
                          <button
                            type="button"
                            className="absolute right-1 top-1 flex items-center justify-center h-5 w-5 rounded-full bg-purple-600 text-xs font-semibold text-white shadow"
                            onClick={() => handleRemoveImage(image.id)}
                            aria-label="등록된 이미지 삭제"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 참고이미지 등록 */}
              <div className='mt-4'>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
                <button
                  type="button"
                  className='flex items-center px-4 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition cursor-pointer'
                  onClick={handleImageButtonClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-purple-700" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                  이미지 추가
                </button>
              </div>
              {/* 텍스트 예시 자동입력 */}
              <div className='flex flex-col gap-1.5 mt-4'>
                <button
                  className='flex items-center py-1 px-3 rounded text-gray-700 text-left bg-purple-50 hover:bg-purple-100 transition cursor-pointer'
                  onClick={() => handleInsertSample('마트 마감세일을 알리는 POP를 만들어줘. \n핵심 키워드는 긴급, 한정, 오늘까지이고, \n\n메인 카피는 "오늘 밤 9시까지 마감 특가"로 부탁해. \n형광 옐로 포인트와 굵은 타이포로 시선을 끌고, 배경은 어두운 네이비로 대비를 줘. \n\n가격 영역은 스티커처럼 보이게 둥근 박스로 강조해줘.')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-2 mr-1 fill-purple-600' height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M281.5-281.5Q200-363 200-480t81.5-198.5Q363-760 480-760t198.5 81.5Q760-597 760-480t-81.5 198.5Q597-200 480-200t-198.5-81.5Z"/></svg>
                  <span className='line-clamp-1'>마트 마감세일을 알리는 POP를 만들어줘.</span>
                </button>
                <button
                  className='flex items-center py-1 px-3 rounded text-gray-700 text-left bg-purple-50 hover:bg-purple-100 transition cursor-pointer'
                  onClick={() => handleInsertSample('간편식품 특가를 소개하는 배너를 만들어줘. \n냉동볶음밥, 즉석국, 냉동만두 3종을 묶어서 보여주고, 메인 문구는 "3종 골라담기 2+1"로 해줘. \n서브 문구는 "혼밥 필수템, 간편하게 맛있게"로 추가하고, \n따뜻한 오렌지 그라데이션 배경과 아이콘 스타일 일러스트를 넣어줘.')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-2 mr-1 fill-purple-600' height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M281.5-281.5Q200-363 200-480t81.5-198.5Q363-760 480-760t198.5 81.5Q760-597 760-480t-81.5 198.5Q597-200 480-200t-198.5-81.5Z"/></svg>
                  <span className='line-clamp-1'>간편식품 특가를 소개하는 배너를 만들어줘.</span>
                </button>
                <button
                  className='flex items-center py-1 px-3 rounded text-gray-700 text-left bg-purple-50 hover:bg-purple-100 transition cursor-pointer'
                  onClick={() => handleInsertSample('정육코너에서 사용할 소고기에 대한 POP를 만들어줘.\n핵심 키워드는 고소함,마블링이야.\n메인카피는 "입안에서 살살 녹는 1등급 한우"\n클로즈업된 소고기 마블링과 고급스러운 금색 폰트로 꾸며줘.')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-2 mr-1 fill-purple-600' height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M281.5-281.5Q200-363 200-480t81.5-198.5Q363-760 480-760t198.5 81.5Q760-597 760-480t-81.5 198.5Q597-200 480-200t-198.5-81.5Z"/></svg>
                  <span className='line-clamp-1'>정육코너에서 사용할 소고기에 대한 POP를 만들어줘.</span>
                </button>
              </div>

              {/* 다운로드 버튼 */}
              <button
                className="w-full mt-4 p-4 bg-purple-600 hover:bg-purple-500 text-white text-xl font-semibold rounded-lg transition duration-200 shrink-0 letter-spacing cursor-pointer"
                onClick={() => setIsLoadingOpen(true)}
              >
                AI 이미지 생성하기
              </button>
            </div>
          </div>
         
          <div className="sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden px-1.5 py-2">
            <div className={`flex-1 flex flex-col min-h-0 rounded-2xl shadow-md p-4 bg-white`}>
              <h2 className={`font-semibold mb-3 text-gray-800`}>AI 이미지 보기</h2>
              <div className="flex-1 sm:overflow-y-auto rounded-lg px-3 bg-gray-50 border inset-shadow-gray-200 custom-scrollbar" style={{scrollbarColor: '#bfbfbf transparent'}}>
                <ul className={`flex flex-col divide-y divide-gray-200`}>
                  <li className='flex flex-col py-3'>
                    <div className='text-gray-600 font-semibold'>02-11 15:00</div>
                    <p className='text-sm text-gray-500 leading-tight'>
                      정육코너에서 사용할 소고기에 대한 POP를 만들어줘.
                      핵심 키워드는 고소함,마블링이야.
                      메인카피는 "입안에서 살살 녹는 1등급 한우"
                      클로즈업된 소고기 마블링과 고급스러운 금색 폰트로 꾸며줘
                    </p>
                    <div className='mt-2'>
                      <div className='overflow-hidden flex flex-col w-36 h-34 border border-purple-200 rounded-xl bg-white'>
                        <div className='flex items-center justify-center w-full h-26 p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='svg-animation size-22' width="90" height="90" viewBox="0 0 348 342" fill="none">
                            <g>
                              <path d="M183.373 175.102C183.373 170.369 184.784 166.91 187.605 164.726C190.427 162.541 193.75 161.449 197.573 161.449C201.396 161.449 204.718 162.541 207.54 164.726C210.361 166.91 211.772 170.369 211.772 175.102V271.906H183.373V175.102Z" fill="#AA3EFF"/>
                              <path d="M106.431 172.781C107.796 168.958 110.117 166.137 113.394 164.316C116.762 162.405 120.312 161.449 124.044 161.449C127.503 161.449 130.825 162.405 134.011 164.316C137.288 166.228 139.563 169.049 140.838 172.781L176.473 271.906H146.436L141.111 254.976H106.021L100.833 271.906H71.3408L106.431 172.781ZM113.121 231.901H134.011L123.634 197.904L113.121 231.901Z" fill="#AA3EFF"/>
                            </g>
                            <path d="M225.596 80.9348C226.974 77.2108 232.241 77.2108 233.619 80.9348L241.633 102.593C242.066 103.763 242.989 104.687 244.16 105.12L265.818 113.134C269.542 114.512 269.542 119.779 265.818 121.157L244.16 129.171C242.989 129.604 242.066 130.528 241.633 131.698L233.619 153.356C232.241 157.08 226.974 157.08 225.596 153.356L217.582 131.698C217.148 130.528 216.225 129.604 215.054 129.171L193.397 121.157C189.673 119.779 189.673 114.512 193.397 113.134L215.054 105.12C216.225 104.687 217.148 103.763 217.582 102.593L225.596 80.9348Z" fill="#AA3EFF"/>
                            <path d="M144.323 106.599C145.701 102.875 150.969 102.875 152.347 106.599L154.584 112.646C155.018 113.817 155.941 114.74 157.111 115.173L163.159 117.41C166.883 118.788 166.883 124.056 163.158 125.434L157.111 127.671C155.941 128.105 155.018 129.028 154.584 130.198L152.347 136.246C150.969 139.97 145.701 139.97 144.323 136.246L142.086 130.198C141.653 129.028 140.729 128.105 139.559 127.671L133.512 125.434C129.788 124.056 129.788 118.788 133.512 117.41L139.559 115.173C140.729 114.74 141.653 113.817 142.086 112.646L144.323 106.599Z" fill="#AA3EFF"/>
                            <path d="M246.983 192.147C248.361 188.423 253.628 188.423 255.006 192.147L257.243 198.195C257.677 199.365 258.6 200.288 259.771 200.722L265.818 202.959C269.542 204.337 269.542 209.605 265.818 210.983L259.771 213.22C258.6 213.653 257.677 214.576 257.243 215.747L255.006 221.794C253.628 225.518 248.361 225.518 246.983 221.794L244.745 215.747C244.312 214.576 243.389 213.653 242.218 213.22L236.171 210.983C232.447 209.605 232.447 204.337 236.171 202.959L242.218 200.722C243.389 200.288 244.312 199.365 244.745 198.195L246.983 192.147Z" fill="#AA3EFF"/>
                          </svg>
                        </div>
                        <div className='flex-1 flex items-center justify-center bg-purple-100 divide-x divide-purple-300'>
                          <p className='text-gray-700 text-sm'>이미지 생성중</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='flex flex-col py-3'>
                    <div className='text-gray-600 font-semibold'>02-11 15:00</div>
                    <p className='text-sm text-gray-500 leading-tight'>
                      정육코너에서 사용할 소고기에 대한 POP를 만들어줘.
                      핵심 키워드는 고소함,마블링이야.
                      메인카피는 "입안에서 살살 녹는 1등급 한우"
                      클로즈업된 소고기 마블링과 고급스러운 금색 폰트로 꾸며줘
                    </p>
                    <div className='mt-2'>
                      <div className='overflow-hidden flex flex-col w-36 h-34 border border-purple-200 rounded-xl bg-white'>
                        <div className='flex items-center justify-center w-full h-26 p-2'>
                          <img src="/img/KakaoTalk_20260212_102215461.png" alt="생성된 이미지" className="max-w-full max-h-full object-cover" />
                        </div>
                        <div className='flex-1 flex items-center justify-center bg-purple-100 divide-x divide-purple-300'>
                          <button
                            className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer"
                            onClick={() => handleOpenPreview('/img/KakaoTalk_20260212_102215461.png')}
                          >
                            크게보기
                          </button>
                          <button className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer">
                            다운로드
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='flex flex-col py-3'>
                    <div className='text-gray-600 font-semibold'>02-11 15:00</div>
                    <p className='text-sm text-gray-500 leading-tight'>
                      정육코너에서 사용할 소고기에 대한 POP를 만들어줘.
                      핵심 키워드는 고소함,마블링이야.
                      메인카피는 "입안에서 살살 녹는 1등급 한우"
                      클로즈업된 소고기 마블링과 고급스러운 금색 폰트로 꾸며줘
                    </p>
                    <div className='mt-2'>
                      <div className='overflow-hidden flex flex-col w-36 h-34 border border-purple-200 rounded-xl bg-white'>
                        <div className='flex items-center justify-center w-full h-26 p-2'>
                          <img src="/img/KakaoTalk_20260212_103222794.png" alt="생성된 이미지" className="max-w-full max-h-full object-cover" />
                        </div>
                        <div className='flex-1 flex items-center justify-center bg-purple-100 divide-x divide-purple-300'>
                          <button
                            className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer"
                            onClick={() => handleOpenPreview('/img/KakaoTalk_20260212_103222794.png')}
                          >
                            크게보기
                          </button>
                          <button className="flex-1 py-1 text-sm text-purple-700 hover:bg-purple-200 transition cursor-pointer">
                            다운로드
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoadingOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 생성 중"
          onClick={() => setIsLoadingOpen(false)}
        >
          <div
            className="w-[90%] max-w-sm rounded-2xl bg-white shadow-2xl p-6 text-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-center">
              <SvgLoader className="h-16 w-16" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">이미지를 생성하고 있어요</h3>
            <p className="mt-2 text-sm text-gray-500">잠시만 기다려주세요.</p>

          </div>
        </div>
      )}
      {previewImageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게보기"
          onClick={handleClosePreview}
        >
          <div
            className="max-h-[85vh] w-[90%] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <div className="text-sm font-semibold text-gray-800">이미지 미리보기</div>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700"
                onClick={handleClosePreview}
              >
                닫기
              </button>
            </div>
            <div className="flex max-h-[75vh] items-center justify-center bg-gray-50 p-4">
              <img src={previewImageUrl} alt="확대 이미지" className="max-h-[70vh] w-auto max-w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
