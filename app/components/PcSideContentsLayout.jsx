'use client';

import { useEffect } from "react";
import resolveImageSrc from "../lib/resolveImageSrc";

export default function PcSideContentsLayout({ children }) {
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
    <div className="side-contents-layout">
      <div className="pop-scroll">
        {/* <!-- <div className="page-info-box">
          자유형식 이미지를 생성하고 상품홍보 및 안내문을 만들 수 있습니다.
        </div> --> */}

        {/* <!-- POP지형 설정 --> */}
        <div id="popBox" className="pop-group">
          {/* <!-- POP 레이아웃 --> */}

          {/* <!-- 1.템플릿 디자인 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">1</div>
              <div className="pop-header-content">
                <div className="pop-title">템플릿 디자인<span className="pop-optional blue">필수</span></div>
                <div className="pop-description">템플릿 선택 후 수정이 가능합니다.</div>
              </div>
              <div className="pop-selected-group">
                <span className="pop-selected-item">상품홍보형</span>·<span className="pop-selected-item">가로형</span>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pop-fieldset">
                <div className="pop-label">템플릿 선택</div>
                <div className="pop-btn-group" role="tablist" aria-label="유형선택">
                  <button type="button" className="pop-btn selected">
                    <span className="w-14 mb-2 -mr-4"><img src={resolveImageSrc('./img/img_target.png')} alt="아이콘"/></span>
                    센터 템플릿
                  </button>
                  <button type="button" className="pop-btn">
                    <span className="w-16 mb-2"><img src={resolveImageSrc('./img/img_speaker.png')} alt="아이콘"/></span>
                    매장 템플릿
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2.색상테마 --> */}
          <div className="pop-box collapsed">
            <div className="pop-header">
              <div className="pop-icon">2</div>
              <div className="pop-header-content">
                <div className="pop-title">색상 테마</div>
                <div className="pop-description">템플릿의 색상 테마를 변경하세요</div>
              </div>
              <div className="pop-selected-group">
                <span className="pop-selected-item">미선택 (AI자동)</span>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
              </div>
            </div>
            <div className="pop-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- 디자인 스타일 --> */}
              <div className="pop-fieldset">
                <div className="pop-label">강조 포인트</div>
                <div className="pop-line-group">
                  <button type="button" className="pop-line-btn selected" data-label="가격강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    노랑
                  </button>
                  <button type="button" className="pop-line-btn" data-label="신선도 강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    빨강
                  </button>
                  <button type="button" className="pop-line-btn" data-label="행사강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    초록
                  </button>
                  <button type="button" className="pop-line-btn" data-label="상품강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    파랑
                  </button>
                  <button type="button" className="pop-line-btn" data-label="상품강조" onClick={(e) => window.jsSelectLabel && window.jsSelectLabel(e.currentTarget)}>
                    흰색
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
                <div className="pop-description">프라이스카드에 넣을 상품정보 입력하세요</div>
              </div>
              <div className="pop-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
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
                <div id="pricecardExcel" data-count="4" className="grid-table" style={{gridTemplateRows: 'repeat(5, 1fr)', gridTemplateColumns: '44px 210px 90px 90px 90px', placeItems: 'center'}}>
                  <div>
                    <input type="checkbox" className="grid-check" id="pricecardAllRow" onclick="jsSelectAllRow(this)" />No
                  </div>
                  <div className="grid-table-th">상품명</div>
                  <div className="grid-table-th">규격</div>
                  <div className="grid-table-th">정상판매가</div>
                  <div className="grid-table-th">할인판매가</div>
                  <div>
                    <input type="checkbox" className="grid-check" />1
                  </div>
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <div>
                    <input type="checkbox" className="grid-check" />2
                  </div>
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <div>
                    <input type="checkbox" className="grid-check" />3
                  </div>
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <div>
                    <input type="checkbox" className="grid-check" />4
                  </div>
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
                  <input type="text" className="workspace-excel" />
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
        </div>
      </div>
    </div>
  );
}