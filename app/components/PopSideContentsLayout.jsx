'use client';

import { useEffect, useState } from "react";
import resolveImageSrc from "../lib/resolveImageSrc";

const STYLE_ITEMS = [
  { title: 'AI 추천', desc: 'AI 추천으로 자동 생성', img: './img/ai추천.png', alt: 'AI추천' },
  { title: '심플', desc: '밝은 배경 & 심플한 느낌', img: './img/심플_openai_썸넬.png', alt: '네추럴 심플 스타일' },
  { title: '신선 마켓', desc: '산지직송 신선식품 느낌', img: './img/신선마켓_openai_썸넬.png', alt: '신선 마켓' },
  { title: '컬러 임펙트', desc: '색상 대비로 시선 집중', img: './img/컬러임팩_openai_썸넬1.png', alt: '컬러 임펙트 스타일' },
  { title: '고급 마켓', desc: '어두운 배경 & 고급스러움', img: './img/고급마켓_openai_썸넬.png', alt: '고급 마켓 스타일' },
  { title: '칠판 일러스트', desc: '친근한 손글씨 느낌', img: './img/칠판일러_openai_썸넬.png', alt: '칠판 일러스트 스타일' },
  { title: '손그림 일러스트', desc: '활기차고 트렌디한 느낌', img: './img/손그림일러스트_openai_썸넬2.png', alt: '손그림 일러스트 스타일' },
  { title: '레트로 마켓', desc: '8~90년대 빈티지 감성', img: './img/레트로_openai_썸넬.png', alt: '레트로 마켓 스타일' },
];

export default function PopSideContentsLayout({ children }) {
  const [popType, setPopType] = useState('promo'); // 'promo' | 'notice'
  const DEFAULT_STYLE_LABEL = '미선택 (AI자동)';
  const [styleLabel, setStyleLabel] = useState(DEFAULT_STYLE_LABEL);
  const [directionLabel, setDirectionLabel] = useState('가로형');
  const [resolutionLabel, setResolutionLabel] = useState('모바일 화면용');
  const handleDirectionClick = (e) => {
    const btn = e.target.closest('.panel-btn');
    if (btn) setDirectionLabel(btn.textContent.trim());
  };
  const handleResolutionChange = (e) => {
    const title = e.target.closest('.panel-radio-group')?.querySelector('.panel-radio-title');
    if (title) setResolutionLabel(title.textContent.replace(/\s+/g, ' ').trim());
  };
  const handleStyleClick = (e) => {
    const item = e.target.closest('.panel-style-item');
    if (!item) return;
    const name = item.querySelector('.text-group p')?.textContent?.trim();
    setStyleLabel(!name || name === 'AI 추천' ? DEFAULT_STYLE_LABEL : name);
  };
  useEffect(() => {
    const listeners = [];

    function toggleac(acc, body) {
      const isCollapsed = acc.classList.contains('collapsed');
      if (isCollapsed) {
        // 다른 열린 박스 닫기
        const openAccs = document.querySelectorAll('.panel-box:not(.collapsed)');
        openAccs.forEach(function (otherAcc) {
          if (otherAcc === acc) return;
          const otherBody = otherAcc.querySelector('.panel-body');
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
      const acs = document.querySelectorAll('.panel-box');
      acs.forEach(function (acc) {
        const header = acc.querySelector('.panel-header');
        const body = acc.querySelector('.panel-body');
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
      const groups = document.querySelectorAll('.panel-btn-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('panel-btn')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.panel-btn');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initAcLineGroups() {
      const groups = document.querySelectorAll('.panel-line-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('form-btn-secondary')) {
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
      const groups = document.querySelectorAll('.panel-style-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('panel-style-item')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.panel-style-item');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initRadioGroups() {
      const wrappers = document.querySelectorAll('[role="radiogroup"], .panel-radio-wrapper');
      wrappers.forEach(function (wrapper) {
        // 초기 동기화
        const radios = wrapper.querySelectorAll('input[type="radio"]');
        radios.forEach(function (r) {
          const lab = (r.closest && r.closest('.panel-radio-group')) ? r.closest('.panel-radio-group') : r.parentElement;
          if (!lab) return;
          if (r.checked) lab.classList.add('selected'); else lab.classList.remove('selected');
        });

        const handler = function (e) {
          const target = e.target;
          if (!target || target.type !== 'radio') return;
          const localRadios = wrapper.querySelectorAll('input[type="radio"]');
          localRadios.forEach(function (rr) {
            const lab = (rr.closest && rr.closest('.panel-radio-group')) ? rr.closest('.panel-radio-group') : rr.parentElement;
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
    <div className="side-contents-layout">
      <div className="flex-1 small-scroll">
        {/* <!-- POP지형 설정 --> */}
        <div id="popBox" className="panel-group">
          {/* <!-- POP 레이아웃 --> */}
          {/* <!-- 1.유형선택 --> */}
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">1</div>
              <div className="panel-header-content">
                <div className="panel-title">유형선택<span className="panel-optional blue">필수</span></div>
                <div className="panel-description">디자인 유형과 방향을 선택하세요</div>
              </div>
              <div className="panel-selected-group">
                <span className="panel-selected-item">{popType === 'promo' ? '상품홍보형' : '안내공지형'}</span>·<span className="panel-selected-item">{directionLabel}</span>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="panel-fieldset">
                <div className="panel-label">홍보유형</div>
                <div className="panel-btn-group" role="tablist" aria-label="유형선택">
                  <button type="button" className="panel-btn selected" onClick={() => setPopType('promo')}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5v9.2a2 2 0 0 0 .586 1.414l11.8 11.8a2 2 0 0 0 2.828 0L28.4 18.228a2 2 0 0 0 0-2.828L16.6 3.6A2 2 0 0 0 15.186 3H6a2 2 0 0 0-2 2Z"/><circle cx="9" cy="9" r="1.5"/><path d="m21 4 .7 2.3L24 7l-2.3.7L21 10l-.7-2.3L18 7l2.3-.7L21 4Z"/></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
                    상품 홍보형
                    <span className="panel-btn-description">상품이나 가격을 강조하는 디자인</span>
                  </button>
                  <button type="button" className="panel-btn" onClick={() => setPopType('notice')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 11 14-6v22l-14-6H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6Z"/><path d="M12 11v10M7 21l1 7h4l-1-7M28 13a4 4 0 0 1 0 6"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path></svg> */}
                    안내/공지형
                    <span className="panel-btn-description">행사, 공지, 안내용 디자인</span>
                  </button>
                </div>
                <div className="panel-label">디자인 방향(규격)</div>
                <div className="panel-btn-group" role="tablist" aria-label="방향선택" onClick={handleDirectionClick}>
                  <button type="button" className="panel-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="20" height="28" rx="2"/><circle cx="20" cy="9" r="2"/><path d="m8 26 6-7 4 4 2-2 4 4"/></svg>
                    세로형
                  </button>
                  <button type="button" className="panel-btn selected">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32"  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="28" height="20" rx="2"/><circle cx="22" cy="12" r="2"/><path d="m4 23 7-7 5 5 3-3 9 8"/></svg>
                    가로형
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2.상품홍보형-스타일선택 --> */}
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">2</div>
              <div className="panel-header-content">
                <div className="panel-title">스타일 선택</div>
                <div className="panel-description">디자인 스타일을 선택하세요</div>
              </div>
              <div className="panel-selected-group">
                <span className="panel-selected-item">{styleLabel}</span>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- 디자인 스타일 --> */}
              <div className="panel-fieldset">
                <div className="panel-label">스타일</div>
                <div className="panel-style-group" aria-label="스타일선택" onClick={handleStyleClick}>
                  {STYLE_ITEMS.map((s, idx) => (
                    <button type="button" key={s.img} className={idx === 0 ? 'panel-style-item selected' : 'panel-style-item'}>
                      <div className="icon-check">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-221.91 135.91-468l75.66-75.65L382-373.22l366.43-366.43L824.09-664 382-221.91Z"></path></svg>
                      </div>
                      <img src={resolveImageSrc(s.img)} alt={s.alt} loading="lazy"/>
                      <div className="text-group">
                        <p>{s.title}</p>
                        <span>{s.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {/* <div className="panel-label">강조 포인트</div>
                <div className="panel-line-group">
                  <button type="button" className="form-btn-secondary selected" data-label="가격강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM5.00488 8.07009V19.9997H19.0049V8.07009L12.0049 3.40342L5.00488 8.07009ZM12.0049 10.9997C10.9003 10.9997 10.0049 10.1043 10.0049 8.99972C10.0049 7.89515 10.9003 6.99972 12.0049 6.99972C13.1095 6.99972 14.0049 7.89515 14.0049 8.99972C14.0049 10.1043 13.1095 10.9997 12.0049 10.9997Z"></path></svg>
                    가격강조
                  </button>
                  <button type="button" className="form-btn-secondary" data-label="신선도 강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z"></path></svg>
                    신선도 강조
                  </button>
                  <button type="button" className="form-btn-secondary" data-label="행사강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path></svg>
                    행사강조
                  </button>
                  <button type="button" className="form-btn-secondary" data-label="상품강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z"></path></svg>
                    상품강조
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- 3.상품홍보형-상품정보 --> */}
          <div className={popType === 'promo' ? 'contents' : 'hidden'}>
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">3</div>
              <div className="panel-header-content">
                <div className="panel-title">상품정보<span className="panel-optional blue">필수</span></div>
                <div className="panel-description">이미지에 들어갈 상품정보를 입력하세요.</div>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="panel-fieldset">
                <div className="panel-label">상품 데이터 입력</div>
                <div className="flex gap-1">
                  <div id="selPopColumn" className="panel-line-group">
                    <button type="button" className="form-btn-secondary selected" data-column="name">
                      <span className="text-red-500">*</span>상품명
                    </button>
                    <button type="button" className="form-btn-secondary">
                      규격
                    </button>
                    <button type="button" className="form-btn-secondary">
                      정상판매가
                    </button>
                    <button type="button" className="form-btn-secondary selected" data-column="dcprice">
                      <span className="text-red-500">*</span>할인판매가
                    </button>
                    <button type="button" className="form-btn-secondary">
                      할인율
                    </button>
                  </div>
                  <button type="button" className="form-btn-secondary" style={{marginLeft: 'auto'}}>
                    행 비우기
                  </button>
                </div>
                <div id="popExcel" className="grid-table" style={{gridTemplateRows: "24px repeat(1, 36px)", gridTemplateColumns: "210px 90px", placeItems: "center"}}>
                  <div className="grid-th" data-column="name">상품명</div>
                  <div className="grid-th hidden" data-column="spec">규격</div>
                  <div className="grid-th hidden" data-column="sprice">정상판매가</div>
                  <div className="grid-th" data-column="dcprice">할인판매가</div>
                  <div className="grid-th hidden" data-column="dcrate">할인율</div>
                  <div className="grid-td"><input type="text" className="workspace-excel" data-column="name" suppressHydrationWarning /></div>
                  <div className="grid-td hidden"><input type="text" className="workspace-excel" data-column="spec" suppressHydrationWarning /></div>
                  <div className="grid-td hidden"><input type="text" className="workspace-excel" data-column="sprice" suppressHydrationWarning /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" data-column="dcprice" suppressHydrationWarning /></div>
                  <div className="grid-td hidden"><input type="text" className="workspace-excel" data-column="dcrate" suppressHydrationWarning /></div>
                </div>

                <div className="panel-label">
                  판매가 표시 단위
                </div>
                <div className="panel-line-group">
                  <button type="button" className="form-btn-secondary selected" data-column="name">
                    AI 자동
                  </button>
                  <button type="button" className="form-btn-secondary" data-column="name">
                    원(뒤)
                  </button>
                  <button type="button" className="form-btn-secondary" data-column="name">
                    싯가
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* 안내·공지 내용 */}
          <div className={popType === 'notice' ? 'contents' : 'hidden'}>
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">3</div>
              <div className="panel-header-content">
                <div className="panel-title">안내·공지 내용</div>
                <div className="panel-description">안내 공지용 타이틀과 내용을 입력하세요.</div>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- POP 추가설명 --> */}
              <div className="panel-fieldset">
                <label className="panel-label">타이틀 입력<span className="panel-byte">0/100 bytes</span></label>
                <textarea className="form-textarea" rows={2} suppressHydrationWarning></textarea>
                <label className="panel-label">내용 입력<span className="panel-byte">0/1000 bytes</span></label>
                <textarea className="form-textarea" rows={3} suppressHydrationWarning></textarea>
              </div>
            </div>
          </div>
          </div>

          {/* <!-- 4.상품홍보형-추가 설명 및 참조 이미지 첨부 --> */}
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">4</div>
              <div className="panel-header-content">
                <div className="panel-title">추가 설명 및 참조 이미지 첨부</div>
                <div className="panel-description">추가하고 싶은 내용을 입력하시면 이미지 생성에 반영됩니다.</div>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- POP 추가설명 --> */}
              <div className="panel-fieldset">
                <label className="panel-label">추가 설명 입력<span className="panel-byte">0/1000 Bytes</span></label>
                <textarea id="popExtra" className="form-textarea" rows={3}></textarea>


                <label className="panel-label">참조 이미지 추가</label>
                <div className="panel-upload-group">
                  <div className="panel-upload-preview" onClick={() => document.getElementById('popFile')?.click()}>
                    <img id="popAttach" src={null} alt="참고이미지" className="hidden"/>
                    <div id="popAttachEmpty">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-7 fill-gray-500">
                        <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="hidden">
                    <div id="popAttachBox" className="panel-upload-hint-box">
                      <div>파일선택 버튼을 눌러 이미지를 업로드하세요.</div>
                      <div>[<span id="popAttachFileName"></span> / <span id="popAttachFileSize"></span>]</div>
                      <div className="flex gap-1 mt-2">
                        <button type="button" className="form-btn" onClick={() => document.getElementById('popFile')?.click()}>이미지
                          변경</button>
                        <button type="button" className="form-btn" onClick={() => window.jsRemoveAttach && window.jsRemoveAttach()}>이미지 삭제</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="popAttachBoxEmpty" className="panel-upload-hint-box">
                      <div>파일선택 버튼을 눌러 이미지를 업로드하세요.</div>
                      <div>[jpg, png / 최대 2MB]</div>
                      <div className="flex gap-1 mt-2">
                        <button type="button" className="form-btn" onClick={() => document.getElementById('popFile')?.click()}>파일선택</button>
                        <input type="file" id="popFile" accept=".jpg,.jpeg,.png" style={{color: 'transparent'}} onChange={() => window.jsPreviewAttach && window.jsPreviewAttach()} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 5.상품홍보형-이미지해상도선택 --> */}
          <div className="panel-box collapsed">
            <div className="panel-header">
              <div className="panel-icon-num">5</div>
              <div className="panel-header-content">
                <div className="panel-title">이미지 해상도 선택<span className="panel-optional blue">필수</span></div>
                <div className="panel-description">이미지의 크기를 선택하세요</div>
              </div>
              <div className="panel-selected-group">
                <span className="panel-selected-item">{resolutionLabel}</span>
              </div>
              <div className="panel-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
              </div>
            </div>
            <div className="panel-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="panel-fieldset">
                <div role="radiogroup" className="panel-radio-wrapper" onChange={handleResolutionChange}>
                  {/* <!-- 모바일 --> */}
                  {/* <label className="panel-radio-group" htmlFor="imageResolutionLow">
                    <input id="imageResolutionLow" type="radio" name="imageResolution" defaultValue="low" />
                    <div className="panel-radio-content">
                      <div className="panel-radio-title">모바일용 <span className="panel-radio-sub">(0.5K)</span></div>
                      <div className="panel-radio-description">448 * 592 px / 빠른 생성 및 모바일 · 웹 게시용</div>
                    </div>
                    <div className="panel-radio-price"><span>300</span> TS</div>
                  </label> */}
                  {/* <!-- 일반용 --> */}
                  <label className="panel-radio-group" htmlFor="imageResolutionHigh">
                    <input id="imageResolutionHigh" type="radio" name="imageResolution" defaultValue="medium" />
                    <div className="panel-radio-content">
                      <div className="panel-radio-title">일반용 <span className="panel-radio-sub">(1K)</span></div>
                      <div className="panel-radio-description">1024 * 1354 px / 소형POP 및 일반 인쇄용</div>
                    </div>
                    <div className="panel-radio-price"><span>500</span> TS</div>
                  </label>

                  {/* <!-- 고화질용 --> */}
                  <label className="panel-radio-group" htmlFor="imageResolutionUltra">
                    <input id="imageResolutionUltra" type="radio" name="imageResolution" defaultValue="high" />
                    <div className="panel-radio-content">
                      <div className="panel-radio-title">고화질용 <span className="panel-radio-sub">(2K)</span></div>
                      <div className="panel-radio-description">2048 * 2708 px / AI이미지 및 선명한 인쇄용</div>
                    </div>
                    <div className="panel-radio-price"><span>700</span> TS</div>
                  </label>

                  {/* <!-- 대형 포스터용 --> */}
                  <label className="panel-radio-group" htmlFor="imageResolutionPoster">
                    <input id="imageResolutionPoster" type="radio" name="imageResolution" defaultValue="high" />
                    <div className="panel-radio-content">
                      <div className="panel-radio-title">대형 포스터용 <span className="panel-radio-sub">(4K)</span></div>
                      <div className="panel-radio-description">4096 * 5416 px / A3 포스터 및 고화질 인쇄용</div>
                    </div>
                    <div className="panel-radio-price"><span>1,500</span> TS</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-pay-wrapper bg-white">
        <div className="panel-pay-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V9.45715C11.7785 9.82398 11 10.3789 11 11M2 5V17C2 18.1046 4.46243 19 7.5 19C8.82963 19 10.0491 18.8284 11 18.5429V11M2 9C2 10.1046 4.46243 11 7.5 11C8.82963 11 10.0491 10.8284 11 10.5429M2 13C2 14.1046 4.46243 15 7.5 15C8.82963 15 10.0491 14.8284 11 14.5429M22 11C22 12.1046 19.5376 13 16.5 13C13.4624 13 11 12.1046 11 11M22 11C22 9.89543 19.5376 9 16.5 9C13.4624 9 11 9.89543 11 11M22 11V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11M22 15C22 16.1046 19.5376 17 16.5 17C13.4624 17 11 16.1046 11 15" stroke="#26499d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div className="panel-pay-info-item">보유<span>235,300</span> TS</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#999"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg>
          <div className="panel-pay-info-item">차감후 <span>234,800</span>TS</div>
        </div>
        <button type="button" className="form-btn-primary">
          <div>AI 이미지 생성 (500TS 차감)</div>
        </button>
      </div>
    </div>
  );
}
