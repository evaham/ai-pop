
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ConfirmReplaceModal from './components/ConfirmReplaceModal';
import ImageGenerationList from './components/ImageGenerationList';
import ImagePreviewModal from './components/ImagePreviewModal';
import LoadingModal from './components/LoadingModal';
import initialGeneratedItems from './data/initialGeneratedItems.json';
import samplePrompts from './data/samplePrompts.json';
import ToolTip from './components/ToolTip';

export default function Home() {
  // 이미지 URL이 상대경로인 경우 BASE_PATH를 붙여주는 함수 GitHub Pages에서 호스팅할 때 필요
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizeImageUrl = useCallback(
    (url) => (url && url.startsWith('/img/') ? `${basePath}${url}` : url),
    [basePath]
  );
  
  // 생성된 이미지 항목 상태 (초기값은 JSON 데이터에서 불러온 항목들로 설정)
  const [generatedItems, setGeneratedItems] = useState(() =>
    initialGeneratedItems.map((item) => ({
      ...item,
      imageUrl: normalizeImageUrl(item.imageUrl)
    }))
  );

  const [inputText, setInputText] = useState('');
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const canGenerate = inputText.trim().length > 0;
  const [isImageOptionsOpen, setIsImageOptionsOpen] = useState(false);
  
  const [tempImages, setTempImages] = useState([]);
  const [detailImage, setDetailImage] = useState(null);
  
  // 입력 내용 변경 확인 모달 상태 및 대기 중인 텍스트 상태
  const [isConfirmReplaceOpen, setIsConfirmReplaceOpen] = useState(false);
  const [pendingSampleText, setPendingSampleText] = useState('');

  const fileInputRef = useRef(null);
  const imageOptionsRef = useRef(null);
  const loadingTimeoutRef = useRef(null);
  const itemTimeoutsRef = useRef(new Map());

  // 목업용 랜덤 이미지용
  const fallbackImageUrls = useMemo(
    () =>
      [
        '/img/KakaoTalk_20260212_102215461.png',
        '/img/KakaoTalk_20260212_103222794.png',
        '/img/KakaoTalk_20260212_103407279.png',
        '/img/KakaoTalk_20260212_103504542.png'
      ].map(normalizeImageUrl),
    [normalizeImageUrl]
  );

  // 목업용 랜덤으로 기본 이미지 URL 반환 함수
  const getRandomFallbackImageUrl = useCallback(
    () => fallbackImageUrls[Math.floor(Math.random() * fallbackImageUrls.length)],
    [fallbackImageUrls]
  );

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
    const timeouts = itemTimeoutsRef.current;
    return () => {
      timeouts.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeouts.clear();
    };
  }, []);

  useEffect(() => {
    if (!isImageOptionsOpen) {
      return;
    }

    const handleClickOutside = (event) => {
      if (!imageOptionsRef.current) {
        return;
      }
      if (!imageOptionsRef.current.contains(event.target)) {
        setIsImageOptionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isImageOptionsOpen]);

  // 목업 기능 시작:
  // - 로딩 항목을 5초 후 완료/실패 랜덤 처리
  // - 완료 시 이미지 URL이 없으면 기본 이미지를 채움
  useEffect(() => {
    generatedItems.forEach((item) => {
      if (item.status !== 'loading') {
        return;
      }

      if (itemTimeoutsRef.current.has(item.id)) {
        return;
      }
      
      const timeoutId = setTimeout(() => {
        const isSuccess = Math.random() < 0.7;
        setGeneratedItems((prev) =>
          prev.map((prevItem) =>
            prevItem.id === item.id
              ? {
                  ...prevItem,
                  status: isSuccess ? 'done' : 'failed',
                  imageUrl: isSuccess ? getRandomFallbackImageUrl() : '',
                  imageUrl2: isSuccess ? getRandomFallbackImageUrl() : '',
                  imageUrl3: isSuccess ? getRandomFallbackImageUrl() : '',
                  imageUrl4: isSuccess ? getRandomFallbackImageUrl() : ''
                }
              : prevItem
          )
        );
        itemTimeoutsRef.current.delete(item.id);
      }, 5000);
      
      itemTimeoutsRef.current.set(item.id, timeoutId);
    });
  }, [generatedItems, getRandomFallbackImageUrl]);

  // 이미지 추가 버튼 클릭 시 파일 입력창 열기
  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleToggleImageOptions = () => {
    setIsImageOptionsOpen((prev) => !prev);
  };

  const handleOpenImageCloud = () => {
    const imageCloudUrl = `${basePath}/html/imageCloud.html`;
    const width = 860;
    const height = 920;
    const screenX = window.screenX ?? window.screenLeft ?? 0;
    const screenY = window.screenY ?? window.screenTop ?? 0;
    const outerWidth = window.outerWidth || window.innerWidth;
    const outerHeight = window.outerHeight || window.innerHeight;
    const left = Math.max(0, Math.round(screenX + (outerWidth - width) / 2));
    const top = Math.max(0, Math.round(screenY + (outerHeight - height) / 2));
    window.open(
      imageCloudUrl,
      'imageCloud',
      `width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`
    );
    setIsImageOptionsOpen(false);
  };

  // 참고 이미지 등록
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return;
    }
    const [file] = files;
    // 새로 선택된 파일들에 대해 URL 객체 생성
    const nextImage = {
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file)
    };
    // 기존 이미지는 해제 후 새 이미지로 교체
    setTempImages((prev) => {
      prev.forEach((image) => URL.revokeObjectURL(image.url));
      return [nextImage];
    });
    setIsImageOptionsOpen(false);
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
      const next = prev.filter((image) => image.id !== id);
      if (next.length === 0) {
        setIsImageOptionsOpen(false);
      }
      return next;
    });
  };


  // 이미지 크게보기 모달 열기
  const handleOpenPreview = (detail) => {
    setDetailImage(detail);
  };

  // 이미지 크게보기 모달 닫기
  const handleClosePreview = () => {
    setDetailImage(null);
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
    if (!canGenerate || !trimmedTitle) {
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
      <div className="relative grid grid-cols-2 sm:grid-cols-4 px-2 my-1">
        <h1 className={`flex items-baseline text-xl font-bold text-center text-gray-800 sm:col-span-1`}>
          <div className='mr-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-7 fill-violet-500' width="206" height="202" viewBox="0 0 206 202" fill="none">
            <path d="M112.032 105.009C112.032 100.276 113.443 96.8167 116.265 94.6321C119.087 92.4475 122.409 91.3552 126.232 91.3552C130.055 91.3552 133.377 92.4475 136.199 94.6321C139.021 96.8167 140.432 100.276 140.432 105.009V201.813H112.032V105.009Z"/>
            <path d="M35.0897 102.688C36.4551 98.8647 38.7762 96.043 42.0531 94.2225C45.4209 92.311 48.9709 91.3552 52.7029 91.3552C56.1618 91.3552 59.4841 92.311 62.67 94.2225C65.9468 96.134 68.2224 98.9557 69.4968 102.688L105.133 201.813H75.0947L69.7699 184.882H34.6801L29.4918 201.813H0L35.0897 102.688ZM41.78 161.808H62.67L52.2933 127.81L41.78 161.808Z"/>
            <path d="M154.255 10.8412C155.633 7.11719 160.9 7.11718 162.278 10.8412L170.292 32.499C170.726 33.6698 171.649 34.5929 172.82 35.0261L194.477 43.0402C198.201 44.4183 198.201 49.6854 194.477 51.0635L172.82 59.0776C171.649 59.5108 170.726 60.4339 170.292 61.6047L162.278 83.2625C160.9 86.9865 155.633 86.9865 154.255 83.2625L146.241 61.6047C145.808 60.4339 144.885 59.5108 143.714 59.0776L122.056 51.0635C118.332 49.6854 118.332 44.4183 122.056 43.0402L143.714 35.0261C144.885 34.5929 145.808 33.6698 146.241 32.499L154.255 10.8412Z"/>
            <path d="M72.9826 36.505C74.3606 32.781 79.6278 32.781 81.0058 36.505L83.2435 42.5521C83.6767 43.7229 84.5998 44.646 85.7706 45.0792L91.8177 47.3169C95.5417 48.6949 95.5417 53.9621 91.8177 55.3401L85.7706 57.5777C84.5998 58.0109 83.6767 58.934 83.2435 60.1049L81.0058 66.1519C79.6278 69.8759 74.3606 69.8759 72.9826 66.1519L70.745 60.1049C70.3118 58.934 69.3887 58.0109 68.2178 57.5777L62.1708 55.3401C58.4468 53.9621 58.4468 48.6949 62.1708 47.3169L68.2178 45.0792C69.3887 44.646 70.3118 43.7229 70.745 42.5521L72.9826 36.505Z"/>
            <path d="M175.642 122.054C177.02 118.33 182.287 118.33 183.665 122.054L185.903 128.101C186.336 129.272 187.259 130.195 188.43 130.628L194.477 132.866C198.201 134.244 198.201 139.511 194.477 140.889L188.43 143.127C187.259 143.56 186.336 144.483 185.903 145.654L183.665 151.701C182.287 155.425 177.02 155.425 175.642 151.701L173.404 145.654C172.971 144.483 172.048 143.56 170.877 143.127L164.83 140.889C161.106 139.511 161.106 134.244 164.83 132.866L170.877 130.628C172.048 130.195 172.971 129.272 173.404 128.101L175.642 122.054Z"/>
            </svg>
          </div>
          <span className='text-gray-700 tracking-tight'>POP 생성하기</span>
        </h1>
        <a href='https://naver.co.kr' target='_blank' rel='noreferrer' className='sm:col-span-1 ml-auto mt-auto px-1.5 py-0.5 border border-black/10 rounded text-xs font-medium text-gray-700 tracking-tight bg-white hover:bg-white/80 transition cursor-pointer'>
          온라인 매뉴얼
        </a>
        <div className='col-span-2 sm:col-span-2 relative flex ml-auto mt-auto py-1 px-2 rounded text-gray-700 font-medium'>
          <button className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-6 mr-1 fill-gray-700' height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"/></svg>
          </button>
          <div className='relative flex items-center group'>
            <span className='mr-1 text-gray-700 text-sm'>가용TS :</span>
            <span className='text-rose-600/90 font-bold'>9,899,555</span>
            <span className='text-gray-400'>.0</span>
            {/* 툴팁 */}
            <div className='absolute top-0 right-0 flex-col hidden group-hover:flex group-hover:pointer-events-auto z-50'>
              <div className='w-64 mt-8 px-4 py-3 rounded-lg font-normal bg-gray-800 text-sm text-gray-300 shadow-md'>
                <div className='flex'>
                  <span className='mr-auto text-gray-300'>TS 머니 :</span>
                  <span className='text-base text-rose-400'>9,899,555</span>
                  <span className='text-base text-gray-400'>.0</span>
                </div>
                <div className='flex'>
                  <span className='mr-auto text-gray-300'>TS 포인트 :</span>
                  <span className='text-base text-cyan-400'>9,899,555</span>
                  <span className='text-base text-gray-400'>.0</span>
                </div>
                <hr className='border-none bg-gray-500 h-px my-2' />
                <div className='flex flex-col'>
                  <div className='mr-1 text-gray-300'>TS머니 전용계좌</div>
                  <div className='text-base text-cyan-400 font-bold'>기업은행 431-123456-78-900</div>
                  <div className='flex'>
                    <span className='mr-1 text-gray-300'>예금주 :</span>
                    <span className='text-base text-gray-300'>투게더마트</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 flex-1 p-2 sm:overflow-hidden">
        {/* 제어 패널 */}
        <div className="sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden min-h-0 p-2 -m-2">
          <div className={`flex-1 flex flex-col sm:overflow-y-auto rounded-2xl shadow-md p-4 bg-white`}>
            <div className='flex items-center mb-3'>
              <h2 className={`mr-2 text-gray-700 font-medium tracking-tight`}>
                텍스트를 입력하여 이미지를 생성해보세요
              </h2>
              {/* 툴팁 */}
              <ToolTip
                content={<>생성을 원하는 이미지의 주제, 텍스트 등 상세히 적어주세요.<br />구체적일수록 의도에 가까운 이미지를 생성합니다.<br />
                추가 된 이미지의 구도나 스타일을 반영해 드립니다.</>}
                placement="bottom-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-gray-500' height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </ToolTip>
            </div>

            <div className="overflow-hidden relative flex-1 flex flex-col min-h-60 rounded-xl border border-gray-200 bg-violet-50/50 px-2 py-2 inset-shadow-2xs transition-all duration-200 focus-within:ring-2 focus-within:ring-violet-300">
              {inputText.length === 0 && (
                <div className="pointer-events-none absolute left-2 top-2 right-2 text-gray-400 whitespace-pre-wrap">
                  {'생성 할 이미지를 설명하세요.\n자세한 설명은 더 좋은 퀄리티의 이미지를 얻을 수 있습니다.'}
                </div>
              )}
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={2}
                aria-label="이미지 생성 설명 입력"
                className="flex-1 w-full h-full resize-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              <div className='flex items-center min-h-7'>
                {/* 이미지 추가2 */}
                {tempImages.length === 0 && (
                  <div className='' ref={imageOptionsRef}>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    <button type="button" onClick={handleImageButtonClick} className='flex items-center justify-center py-1 pl-1 px-3 rounded-full bg-violet-400/20 cursor-pointer hover:bg-violet-400/50 transition'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-violet-600" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                      <span className='text-violet-600 font-normal tracking-tight'>이미지 추가</span>
                    </button>
                    {/* <button
                      type="button"
                      className='flex items-center justify-center p-2 rounded-full bg-violet-400/30 cursor-pointer hover:bg-violet-400/50 transition'
                      onClick={handleToggleImageOptions}
                      aria-expanded={isImageOptionsOpen}
                      aria-controls="image-add-options"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-violet-600" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </button> */}

                    {/* {isImageOptionsOpen && (
                      <div id="image-add-options" className='absolute bottom-0 left-10 p-1 w-50 rounded-lg bg-gray-800 text-gray-300 transition duration-200 ease-out'>
                        <div className='flex flex-col text-sm'>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                          <button type="button" onClick={handleImageButtonClick} className='p-1 rounded text-left hover:bg-white/10 cursor-pointer'>로컬 이미지 업로드</button>
                          <button
                            type="button"
                            onClick={handleOpenImageCloud}
                            className='p-1 rounded text-left hover:bg-white/10 cursor-pointer'
                          >
                            이미지 클라우드에서 가져오기
                          </button>
                        </div>
                      </div>
                    )} */}
                  </div>
                )}
                <div className='ml-auto text-xs text-gray-400'>
                  <span className='ml-auto text-gray-800'>0</span> / <span>2000</span>&nbsp;Bytes
                </div>
              </div>

              {/* 등록이미지 영역 */}
              {tempImages.length > 0 && (
                <div className="-m-2 mt-0 bg-violet-100 border-t border-violet-200">
                  <div className="flex items-center gap-x-5 gap-y-3 p-2">
                    {tempImages.map((image) => (
                      <div key={image.id} className="relative h-16 w-16">
                        <div className="h-16 w-16 overflow-hidden rounded-lg border border-violet-200 bg-white">
                          <img src={image.url} alt={image.name} className="h-full w-full object-cover" />
                        </div>
                        <button
                          type="button"
                          className="absolute -right-2 -top-1 flex items-center justify-center h-5 w-5 rounded-full bg-gray-700 text-xs font-bold text-white shadow cursor-pointer"
                          onClick={() => handleRemoveImage(image.id)}
                          aria-label="등록된 이미지 삭제"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </button>
                      </div>
                    ))}
                    <div className='w-full bg-violet-200 rounded px-4 py-2'>
                      <p className='text-sm text-gray-700 tracking-tight'>
                        참고하고 싶은 상품 사진이나 배경 이미지를 추가해 보세요.<br />해당 이미지의 구도나 스타일을 반영해 드립니다.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 참고이미지 등록 */}
            {/* <div className='flex items-center mt-4'>
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
                className='flex items-center mr-2 px-4 py-2 rounded-lg bg-violet-400/20 text-violet-700 hover:bg-violet-500/30 transition cursor-pointer'
                onClick={handleImageButtonClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-violet-600" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                <span className='mr-2 tracking-tight'>이미지 추가</span>
              </button>
              <ToolTip
                content={<>참고하고 싶은 상품 사진이나 배경 이미지를 추가해 보세요.<br />해당 이미지의 구도나 스타일을 반영해 드립니다.</>}
                placement="bottom-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-gray-500' height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </ToolTip>
            </div> */}
            
            
            {/* 텍스트 예시 자동입력 버튼그룹 시작 */}
            <div className='flex flex-col gap-0.5 mt-4'>
              {samplePrompts.map((sample) => (
                <button
                  key={sample.id}
                  className='flex items-center p-0.5 font-medium rounded text-sm text-gray-600 text-left hover:bg-violet-50 transition cursor-pointer'
                  onClick={() => handleInsertSample(sample.text)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className='size-2 mr-1 fill-violet-600' height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M281.5-281.5Q200-363 200-480t81.5-198.5Q363-760 480-760t198.5 81.5Q760-597 760-480t-81.5 198.5Q597-200 480-200t-198.5-81.5Z"/></svg>
                  <span className='line-clamp-1'>{sample.label}</span>
                </button>
              ))}
            </div>
            {/* 텍스트 예시 자동입력 버튼그룹 종료 */}
            <button
              className="flex items-center justify-center w-full mt-4 p-4 bg-violet-500/90 **:fill-white hover:bg-violet-500 text-white rounded-lg transition duration-200 shrink-0 letter-spacing cursor-pointer
                disabled:bg-gray-300 disabled:cursor-not-allowed disabled:**:fill-gray-500
              "
              onClick={handleGenerateImage}
              disabled={!canGenerate}
            >
              <span className='mr-2 text-lg font-bold tracking-tight'>AI 이미지 생성 (500TS 차감)</span>
              {/* 툴팁 */}
              <ToolTip
                content={<>생성 버튼 클릭 시 500 TS가 선 차감됩니다.<br />생성에는 약 00초 소요되며, 실패 시 차감된 금액은 즉시 환불 처리됩니다.</>}
                placement="bottom-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </ToolTip>
            </button>
          </div>
        </div>

        {/* 이미지 생성 리스트 영역 시작*/}
        <div className='sm:col-span-2 flex flex-col gap-4 sm:overflow-hidden min-h-0 p-2 -m-2'>
          <div className='flex-1 flex flex-col min-h-0 rounded-2xl shadow-md p-4 bg-white'>
            <div className='flex items-center mb-3'>
              <h2 className={`mr-2 text-gray-700 font-medium`}>
                AI 이미지 보기
              </h2>
              {/* 툴팁 */}
              <ToolTip
                content={<>생성된 결과물이 이 곳에 표시됩니다.<br />크게보기를 통해 AI 이미지 상세정보 확인 및 다운로드 기능을 제공합니다.</>}
                placement="bottom-left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6 fill-gray-500' height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </ToolTip>

            </div>
            <div className='flex-1 sm:overflow-y-auto rounded-lg px-3 bg-gray-50 border border-gray-50'>
              <ImageGenerationList items={generatedItems} onOpenPreview={handleOpenPreview} />
            </div>
          </div>
        </div>
        {/* 이미지 생성 리스트 영역 종료*/}
      </div>

      {/* 로딩 모달 */}
      {/* <LoadingModal isOpen={isLoadingOpen} onClose={() => setIsLoadingOpen(false)} /> */}
      {/* 이미지 크게보기 모달 */}
      <ImagePreviewModal detail={detailImage} onClose={handleClosePreview} />
      {/* 입력 내용 변경 모달 */}
      <ConfirmReplaceModal isOpen={isConfirmReplaceOpen} onConfirm={handleConfirmReplace} onCancel={handleCancelReplace} />
    </div>
  );
}
