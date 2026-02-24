
'use client';

import { useEffect, useRef, useState } from 'react';
import ConfirmReplaceModal from './components/ConfirmReplaceModal';
import ImageGenerationList from './components/ImageGenerationList';
import ImagePreviewModal from './components/ImagePreviewModal';
import LoadingModal from './components/LoadingModal';
import initialGeneratedItems from './data/initialGeneratedItems.json';
import samplePrompts from './data/samplePrompts.json';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizeImageUrl = (url) => (url && url.startsWith('/img/') ? `${basePath}${url}` : url);

  const [inputText, setInputText] = useState('');
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [tempImages, setTempImages] = useState([]);
  const [detailImage, setDetailImage] = useState('');
  const [isConfirmReplaceOpen, setIsConfirmReplaceOpen] = useState(false);
  const [pendingSampleText, setPendingSampleText] = useState('');

  const [generatedItems, setGeneratedItems] = useState(() =>
    initialGeneratedItems.map((item) => ({
      ...item,
      imageUrl: normalizeImageUrl(item.imageUrl)
    }))
  );

  const fileInputRef = useRef(null);
  const loadingTimeoutRef = useRef(null);
  const itemTimeoutsRef = useRef(new Map());

  // 목업용 랜덤 이미지용
  const fallbackImageUrls = [
    '/img/KakaoTalk_20260212_102215461.png',
    '/img/KakaoTalk_20260212_103222794.png',
    '/img/KakaoTalk_20260212_103407279.png',
    '/img/KakaoTalk_20260212_103504542.png'
  ].map(normalizeImageUrl);

  // 목업용 랜덤으로 기본 이미지 URL 반환 함수
  const getRandomFallbackImageUrl = () => fallbackImageUrls[Math.floor(Math.random() * fallbackImageUrls.length)];

  // 컴포넌트 언마운트 시 모든 URL 객체 해제
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      tempImages.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, [tempImages]);

  // 컴포넌트 언마운트 시 모든 이미지 생성 타임아웃 정리
  useEffect(() => {
    return () => {
      itemTimeoutsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      itemTimeoutsRef.current.clear();
    };
  }, []);

  // 목업 기능 시작:
  // - 로딩 항목을 10초 후 완료 처리
  // - 이미지 URL이 없으면 기본 이미지를 채움
  useEffect(() => {
    generatedItems.forEach((item) => {
      if (item.status !== 'loading') {
        return;
      }

      if (itemTimeoutsRef.current.has(item.id)) {
        return;
      }

      const timeoutId = setTimeout(() => {
        setGeneratedItems((prev) =>
          prev.map((prevItem) =>
            prevItem.id === item.id
              ? {
                  ...prevItem,
                  status: 'done',
                  imageUrl: prevItem.imageUrl || getRandomFallbackImageUrl()
                }
              : prevItem
          )
        );
        itemTimeoutsRef.current.delete(item.id);
      }, 10000);

      itemTimeoutsRef.current.set(item.id, timeoutId);
    });
  }, [generatedItems]);

  // 이미지 추가 버튼 클릭 시 파일 입력창 열기
  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 참고 이미지 등록
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return;
    }
    // 새로 선택된 파일들에 대해 URL 객체 생성
    const nextImages = files.map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    // 기존 이미지에 새로 선택된 이미지 추가
    setTempImages((prev) => [...prev, ...nextImages]);
    // 파일 입력값 초기화하여 같은 파일을 다시 선택할 수 있도록 함
    event.target.value = '';
  };
  // 이미지 삭제
  const handleRemoveImage = (id) => {
    setTempImages((prev) => {
      const target = prev.find((image) => image.id === id);
      if (target) {
        URL.revokeObjectURL(target.url);
      }
      return prev.filter((image) => image.id !== id);
    });
  };


  // 이미지 크게보기 모달 열기
  const handleOpenPreview = (url) => {
    setDetailImage(url);
  };

  // 이미지 크게보기 모달 닫기
  const handleClosePreview = () => {
    setDetailImage('');
  };

  // 텍스트 예시 버튼 클릭 시 입력 내용 변경 확인 모달 열기 또는 바로 텍스트 변경
  const handleInsertSample = (text) => {
    if (inputText.trim().length > 0) {
      setPendingSampleText(text);
      setIsConfirmReplaceOpen(true);
      return;
    }
    setInputText(text);
  };

  // 입력 내용 변경 확인 모달에서 변경하기 선택 시 텍스트 변경
  const handleConfirmReplace = () => {
    setInputText(pendingSampleText);
    setPendingSampleText('');
    setIsConfirmReplaceOpen(false);
  };

  // 입력 내용 변경 확인 모달에서 취소 선택 시 대기 중인 텍스트 초기화 및 모달 닫기
  const handleCancelReplace = () => {
    setPendingSampleText('');
    setIsConfirmReplaceOpen(false);
  };

  // 타임아웃이 필요한 항목이 없어질 때 타임아웃 정리
  const formatTimestamp = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}-${day} ${hours}:${minutes}`;
  };

  // AI 이미지 생성 버튼 클릭
  const handleGenerateImage = () => {
    // 입력값이 없거나 로딩 중이면 생성 방지
    const trimmedTitle = inputText.trim();
    if (!trimmedTitle) {
      return;
    }
    if (isLoadingOpen) {
      return;
    }
    // 새로운 로딩 항목 추가
    const newItem = {
      id: crypto.randomUUID(),
      createdAt: formatTimestamp(new Date()),
      prompt: trimmedTitle,
      status: 'loading',
      imageUrl: ''
    };
    // 새 항목을 가장 앞에 추가하여 최신 생성물이 상단에 오도록 함
    setGeneratedItems((prev) => [newItem, ...prev]);
    // 로딩 모달 열기 및 입력 초기화
    setIsLoadingOpen(true);
    setInputText('');
    // 3초 후 로딩 모달 닫기 (목업용)
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    // 실제 API 연동 시에는 응답이 왔을 때 닫도록 변경 필요
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoadingOpen(false);
      loadingTimeoutRef.current = null;
    }, 3000);
  };

  return (
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 flex-1 sm:overflow-hidden">
        {/* 제어 패널 */}
        <div className="sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden min-h-0 px-1.5 py-2">
          <div className={`flex-1 flex flex-col sm:overflow-y-auto rounded-2xl shadow-md p-4 bg-white custom-scrollbar`} style={{ scrollbarColor: '#bfbfbf transparent' }}>
            <h2 className={`font-semibold mb-3 text-gray-800`}>텍스트를 입력하여 이미지를 생성해보세요</h2>
            <div className="relative flex-1 flex flex-col rounded-xl border border-purple-200 bg-purple-50 px-2 py-2 shadow-sm transition-all duration-200 custom-scrollbar focus-within:ring-2 focus-within:ring-purple-500">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
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

            
            {/* 텍스트 예시 자동입력 버튼그룹 시작 */}
            <div className='flex flex-col gap-1.5 mt-4'>
              {samplePrompts.map((sample) => (
                <button
                  key={sample.id}
                  className='flex items-center py-1 px-3 rounded text-gray-700 text-left bg-purple-50 hover:bg-purple-100 transition cursor-pointer'
                  onClick={() => handleInsertSample(sample.text)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-2 mr-1 fill-purple-600' height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M281.5-281.5Q200-363 200-480t81.5-198.5Q363-760 480-760t198.5 81.5Q760-597 760-480t-81.5 198.5Q597-200 480-200t-198.5-81.5Z"/></svg>
                  <span className='line-clamp-1'>{sample.label}</span>
                </button>
              ))}
            </div>
            {/* 텍스트 예시 자동입력 버튼그룹 종료 */}

            <button
              className="w-full mt-4 p-4 bg-purple-600 hover:bg-purple-500 text-white text-xl font-semibold rounded-lg transition duration-200 shrink-0 letter-spacing cursor-pointer"
              onClick={handleGenerateImage}
            >
              AI 이미지 생성하기
            </button>
          </div>
        </div>

        {/* 이미지 생성 리스트 영역 시작*/}
        <div className='sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden px-1.5 py-2'>
          <div className='flex-1 flex flex-col min-h-0 rounded-2xl shadow-md p-4 bg-white'>
            <h2 className='font-semibold mb-3 text-gray-800'>AI 이미지 보기</h2>
            <div className='flex-1 sm:overflow-y-auto rounded-lg px-3 bg-gray-50 border border-gray-200 inset-shadow-gray-200 custom-scrollbar' style={{ scrollbarColor: '#bfbfbf transparent' }}>
              <ImageGenerationList items={generatedItems} onOpenPreview={handleOpenPreview} />
            </div>
          </div>
        </div>
        {/* 이미지 생성 리스트 영역 종료*/}
      </div>

      {/* 로딩팝업 */}
      <LoadingModal isOpen={isLoadingOpen} onClose={() => setIsLoadingOpen(false)} />
      {/* 이미지 크게보기 팝업 */}
      <ImagePreviewModal imageUrl={detailImage} onClose={handleClosePreview} />
      {/* 입력 내용 변경 확인 팝업 */}
      <ConfirmReplaceModal isOpen={isConfirmReplaceOpen} onConfirm={handleConfirmReplace} onCancel={handleCancelReplace} />
    </div>
  );
}
