'use client';

import React, { useEffect } from 'react';
export default function PopSideContentsLayout({ children }) {
  useEffect(() => {
    const listeners = [];

    function toggleac(acc, body) {
      const isCollapsed = acc.classList.contains('collapsed');
      if (isCollapsed) {
        // 다른 열린 박스 닫기
        const openAccs = document.querySelectorAll('.pop-box:not(.collapsed)');
        openAccs.forEach(function (otherAcc) {
          if (otherAcc === acc) return;
          const otherBody = otherAcc.querySelector('.pop-body');
          if (!otherBody) return;
          otherBody.style.maxHeight = otherBody.scrollHeight + 'px';
          void otherBody.offsetHeight;
          otherBody.style.maxHeight = '0px';
          otherBody.style.opacity = '0';
          setTimeout(function () { otherAcc.classList.add('collapsed'); }, 350);
        });

        // 현재 항목 열기
        acc.classList.remove('collapsed');
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = '1';
        setTimeout(function () { if (!acc.classList.contains('collapsed')) body.style.maxHeight = ''; }, 35);
      } else {
        // 접기
        body.style.maxHeight = body.scrollHeight + 'px';
        void body.offsetHeight;
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
        setTimeout(function () { acc.classList.add('collapsed'); }, 350);
      }
    }

    function initacs() {
      const acs = document.querySelectorAll('.pop-box');
      acs.forEach(function (acc) {
        const header = acc.querySelector('.pop-header');
        const body = acc.querySelector('.pop-body');
        if (!header || !body) return;

        if (!acc.classList.contains('collapsed')) acc.classList.add('collapsed');
        body.style.maxHeight = '0px';
        body.style.opacity = '0';

        const handler = function () { toggleac(acc, body); };
        header.addEventListener('click', handler);
        listeners.push([header, 'click', handler]);
      });
    }

    function initAcBtnGroups() {
      const groups = document.querySelectorAll('.pop-btn-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('pop-btn')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.pop-btn');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initAcLineGroups() {
      const groups = document.querySelectorAll('.pop-line-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('pop-line-btn')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          target.classList.toggle('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initAcStyleGroups() {
      const groups = document.querySelectorAll('.pop-style-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('pop-style-item')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.pop-style-item');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initRadioGroups() {
      const wrappers = document.querySelectorAll('[role="radiogroup"], .pop-radio-wrapper');
      wrappers.forEach(function (wrapper) {
        // 초기 동기화
        const radios = wrapper.querySelectorAll('input[type="radio"]');
        radios.forEach(function (r) {
          const lab = (r.closest && r.closest('.pop-radio-group')) ? r.closest('.pop-radio-group') : r.parentElement;
          if (!lab) return;
          if (r.checked) lab.classList.add('selected'); else lab.classList.remove('selected');
        });

        const handler = function (e) {
          const target = e.target;
          if (!target || target.type !== 'radio') return;
          const localRadios = wrapper.querySelectorAll('input[type="radio"]');
          localRadios.forEach(function (rr) {
            const lab = (rr.closest && rr.closest('.pop-radio-group')) ? rr.closest('.pop-radio-group') : rr.parentElement;
            if (!lab) return;
            lab.classList.toggle('selected', rr.checked);
          });
        };
        wrapper.addEventListener('change', handler);
        listeners.push([wrapper, 'change', handler]);
      });
    }

    // 초기화 호출
    initacs(); initAcBtnGroups(); initAcLineGroups(); initAcStyleGroups(); initRadioGroups();

    return () => {
      // cleanup listeners
      listeners.forEach(function (entry) {
        const el = entry[0];
        const evt = entry[1];
        const fn = entry[2];
        try { el.removeEventListener(evt, fn); } catch (e) { /* ignore */ }
      });
    };
  }, []);
  return (
    <div className="side-contents-layout p-0!">
      <div className="pop-scroll">
        {/* <!-- <div className="page-info-box">
          자유형식 이미지를 생성하고 상품홍보 및 안내문을 만들 수 있습니다.
        </div> --> */}

        {/* <!-- POP지형 설정 --> */}
        <div id="popBox" className="pop-group">
          {/* <!-- POP 레이아웃 --> */}

          {/* <!-- 1.유형선택 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">1</div>
              <div className="pop-header-content">
                <div className="pop-title">유형선택</div>
                <div className="pop-description">디자인 유형과 방향을 선택하세요</div>
              </div>
              <div className="pop-selected-group">
                <span className="pop-selected-item">상품홍보형</span>·<span className="pop-selected-item">가로형</span>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="M480-360 280-560h400L480-360Z"></path></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m280-400 200-200 200 200H280Z"></path></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pop-fieldset">
                <div className="pop-label">홍보유형</div>
                <div className="pop-btn-group" role="tablist" aria-label="유형선택">
                  <button type="button" className="pop-btn selected">
                    <span className="w-14 mb-2 -mr-4"><img src="./img_target.png" alt="아이콘"/></span>
                    상품 홍보형
                  </button>
                  <button type="button" className="pop-btn">
                    <span className="w-16 mb-2"><img src="./img_speaker.png" alt="아이콘"/></span>
                    안내/공지형
                  </button>
                </div>
                <div className="pop-label">디자인 방향(규격)</div>
                <div className="pop-btn-group" role="tablist" aria-label="방향선택">
                  <button type="button" className="pop-btn">
                    <div className="pop-icon-vertical"></div>
                    세로형
                  </button>
                  <button type="button" className="pop-btn selected">
                    <div className="pop-icon-horizontal"></div>
                    가로형
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2.상품홍보형-스타일선택 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">2</div>
              <div className="pop-header-content">
                <div className="pop-title">스타일 선택<span className="pop-optional">샘플보기</span></div>
                <div className="pop-description">디자인 스타일을 선택하세요</div>
              </div>
              <div className="pop-selected-group">
                <span className="pop-selected-item">미선택 (AI자동)</span>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="M480-360 280-560h400L480-360Z"></path></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m280-400 200-200 200 200H280Z"></path></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- 디자인 스타일 --> */}
              <div className="pop-fieldset">
                <div className="pop-label">스타일</div>

                <div className="pop-style-group" aria-label="스타일선택">
                  <button type="button" className="pop-style-item selected">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <img src="./1001_20260819_140739510.jpg" alt="컬러 임펙트 스타일" loading="lazy"/>
                    <div className="text-group">
                      <p>AI 추천</p>
                      <span>AI 추천으로 자동 생성</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <img src="./1001_20260908_092928486.jpg" alt="쿨 &amp; 프레시 스타일" loading="lazy"/>
                    <div className="text-group">
                      <p>신선 마켓</p>
                      <span>산지직송 신선식품 느낌</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>컬러 임펙트</p>
                      <span>색상 대비로 시선 집중</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>네추럴 심플</p>
                      <span>밝은 배경 &amp; 심플한 느낌</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>고급 마켓</p>
                      <span>어두운 배경 &amp; 고급스러움</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>칠판 일러스트</p>
                      <span>친근한 손글씨 느낌</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>팝아트 일러스트</p>
                      <span>활기차고 트렌디한 느낌</span>
                    </div>
                  </button>
                  <button type="button" className="pop-style-item">
                    <div className="icon-check">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                    </div>
                    <div className="text-group">
                      <p>레트로 마켓</p>
                      <span>8~90년대 빈티지 감성</span>
                    </div>
                  </button>
                </div>
                <div className="pop-label">강조 포인트</div>
                <div className="pop-line-group">
                  <button type="button" className="pop-line-btn selected" data-label="가격강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    가격강조
                  </button>
                  <button type="button" className="pop-line-btn" data-label="신선도 강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    신선도 강조
                  </button>
                  <button type="button" className="pop-line-btn" data-label="행사강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    행사강조
                  </button>
                  <button type="button" className="pop-line-btn" data-label="상품강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    상품강조
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 3.상품홍보형-상품정보 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">3</div>
              <div className="pop-header-content">
                <div className="pop-title">상품정보</div>
                <div className="pop-description">이미지에 들어갈 상품정보를 입력하세요.</div>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="M480-360 280-560h400L480-360Z"></path></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m280-400 200-200 200 200H280Z"></path></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pop-fieldset">
                <div className="pop-label">상품 데이터 입력</div>
                <div className="flex gap-1">
                  <div id="selPopColumn" className="pop-line-group">
                    <button type="button" className="pop-line-btn selected" data-column="name">
                      <span className="text-red-500">*</span>상품명
                    </button>
                    <button type="button" className="pop-line-btn">
                      규격
                    </button>
                    <button type="button" className="pop-line-btn">
                      정상판매가
                    </button>
                    <button type="button" className="pop-line-btn selected" data-column="dcprice">
                      <span className="text-red-500">*</span>할인판매가
                    </button>
                    <button type="button" className="pop-line-btn">
                      할인율
                    </button>
                  </div>
                  <button type="button" className="pop-line-btn" style={{marginLeft: 'auto'}}>
                    행 비우기
                  </button>
                </div>
                <div id="popExcel" className="pop-grid-table" style={{gridTemplateRows: "repeat(2, 1fr)", gridTemplateColumns: "210px 90px", placeItems: "center"}}>
                  <div className="pop-grid-th" data-column="name">상품명</div>
                  <div className="pop-grid-th hidden" data-column="spec">규격</div>
                  <div className="pop-grid-th hidden" data-column="sprice">정상판매가</div>
                  <div className="pop-grid-th" data-column="dcprice">할인판매가</div>
                  <div className="pop-grid-th hidden" data-column="dcrate">할인율</div>
                  <input type="text" className="workspace-excel" data-column="name" defaultValue="" data-sharkid="__0" />
                  <input type="text" className="workspace-excel hidden" data-column="spec" defaultValue="" />
                  <input type="text" className="workspace-excel hidden" data-column="sprice" defaultValue="" />
                  <input type="text" className="workspace-excel" data-column="dcprice" defaultValue="" data-sharkid="__1" />
                  <input type="text" className="workspace-excel hidden" data-column="dcrate" defaultValue="" />
                </div>

                <div className="pop-label">
                  판매가 표시 단위
                </div>
                <div className="pop-line-group">
                  <button type="button" className="pop-line-btn selected" data-column="name">
                    AI 자동
                  </button>
                  <button type="button" className="pop-line-btn" data-column="name">
                    원(뒤)
                  </button>
                  <button type="button" className="pop-line-btn" data-column="name">
                    싯가
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 4.상품홍보형-추가 설명 및 참조 이미지 첨부 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">4</div>
              <div className="pop-header-content">
                <div className="pop-title">추가 설명 및 참조 이미지 첨부<span className="pop-optional">선택</span></div>
                <div className="pop-description">추가하고 싶은 내용을 입력하시면 이미지 생성에 반영됩니다.</div>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="M480-360 280-560h400L480-360Z"></path></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m280-400 200-200 200 200H280Z"></path></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- POP 추가설명 --> */}
              <div className="pop-fieldset">
                <label className="pop-label">추가 설명 입력</label>
                <textarea id="popExtra" className="pop-form-textarea" onKeyUp={(e) => window.jsGetByte && window.jsGetByte(e.currentTarget, 1000)} data-sharkid="__2"></textarea>
                <div className="pop-form-text-byte">
                  <span id="popExtraByte">0</span> / 1000 Bytes
                </div>

                <label className="pop-label">참조 이미지 추가</label>
                <div className="pop-upload-group">
                  <div className="pop-upload-preview" onClick={() => document.getElementById('popFile')?.click()}>
                    <img id="popAttach" src={null} alt="참고이미지" className="hidden"/>
                    <div id="popAttachEmpty">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-7 fill-gray-500">
                        <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="hidden">
                    <div id="popAttachBox" className="pop-upload-hint-box">
                      <div>파일선택 버튼을 눌러 이미지를 업로드하세요.</div>
                      <div>[<span id="popAttachFileName"></span> / <span id="popAttachFileSize"></span>]</div>
                      <div className="flex gap-1 mt-2">
                        <button type="button" className="pop-base-btn" onClick={() => document.getElementById('popFile')?.click()}>이미지
                          변경</button>
                        <button type="button" className="pop-base-btn" onClick={() => window.jsRemoveAttach && window.jsRemoveAttach()}>이미지 삭제</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="popAttachBoxEmpty" className="pop-upload-hint-box">
                      <div>파일선택 버튼을 눌러 이미지를 업로드하세요.</div>
                      <div>[jpg, png / 최대 2MB]</div>
                      <div className="flex gap-1 mt-2">
                        <button type="button" className="pop-base-btn" onClick={() => document.getElementById('popFile')?.click()}>파일선택</button>
                        <input type="file" id="popFile" accept=".jpg,.jpeg,.png" style={{color: 'transparent'}} onChange={() => window.jsPreviewAttach && window.jsPreviewAttach()} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 5.상품홍보형-이미지해상도선택 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">5</div>
              <div className="pop-header-content">
                <div className="pop-title">이미지 해상도 선택</div>
                <div className="pop-description">이미지의 크기를 선택하세요</div>
              </div>
              <div className="pop-selected-group">
                <span className="pop-selected-item">모바일 화면용</span>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="M480-360 280-560h400L480-360Z"></path></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666"><path d="m280-400 200-200 200 200H280Z"></path></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pop-fieldset">
                {/* <!-- 모바일 --> */}
                <div role="radiogroup" className="pop-radio-wrapper">
                  <label className="pop-radio-group" htmlFor="imageResolutionLow">
                    <input id="imageResolutionLow" type="radio" name="imageResolution" defaultValue="low" data-sharkid="__3" />
                    <div className="pop-radio-content">
                      <div className="pop-radio-title">모바일용 <span className="pop-radio-sub">(0.5K)</span></div>
                      <div className="pop-radio-description">448 * 592 px / 빠른 생성 및 모바일 · 웹 게시용</div>
                    </div>
                    <div className="pop-radio-price"><span>300</span> TS</div>
                  </label>
                  {/* <!-- 일반용 --> */}
                  <label className="pop-radio-group" htmlFor="imageResolutionHigh">
                    <input id="imageResolutionHigh" type="radio" name="imageResolution" defaultValue="medium" data-sharkid="__4" />
                    <div className="pop-radio-content">
                      <div className="pop-radio-title">일반용 <span className="pop-radio-sub">(1K)</span></div>
                      <div className="pop-radio-description">1024 * 1354 px / 소형POP 및 일반 인쇄용</div>
                    </div>
                    <div className="pop-radio-price"><span>500</span> TS</div>
                  </label>

                  {/* <!-- 고화질용 --> */}
                  <label className="pop-radio-group" htmlFor="imageResolutionUltra">
                    <input id="imageResolutionUltra" type="radio" name="imageResolution" defaultValue="high" data-sharkid="__5" />
                    <div className="pop-radio-content">
                      <div className="pop-radio-title">고화질용 <span className="pop-radio-sub">(2K)</span></div>
                      <div className="pop-radio-description">2048 * 2708 px / AI이미지 및 선명한 인쇄용</div>
                    </div>
                    <div className="pop-radio-price"><span>700</span> TS</div>
                  </label>

                  {/* <!-- 대형 포스터용 --> */}
                  <label className="pop-radio-group" htmlFor="imageResolutionPoster">
                    <input id="imageResolutionPoster" type="radio" name="imageResolution" defaultValue="high" data-sharkid="__6" />
                    <div className="pop-radio-content">
                      <div className="pop-radio-title">대형 포스터용 <span className="pop-radio-sub">(4K)</span></div>
                      <div className="pop-radio-description">4096 * 5416 px / A3 포스터 및 고화질 인쇄용</div>
                    </div>
                    <div className="pop-radio-price"><span>1,500</span> TS</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop-pay-wrapper flex flex-col items-center justify-center h-20 bg-white">
        <button type="button" className="pop-pay-button">
          <div>AI 이미지 생성 (500TS 차감)</div>
        </button>
      </div>
    </div>
  );
}