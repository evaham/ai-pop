'use client';

import { useEffect } from "react";
import resolveImageSrc from "../lib/resolveImageSrc";

export default function PcSideContentsLayout({ onOpenPopup }) {
  useEffect(() => {
    const listeners = [];

    function toggleac(acc, body) {
      const isCollapsed = acc.classList.contains('collapsed');
      if (isCollapsed) {
        // 다른 열린 박스 닫기
        const openAccs = document.querySelectorAll('.pc-box:not(.collapsed)');
        openAccs.forEach(function (otherAcc) {
          if (otherAcc === acc) return;
          const otherBody = otherAcc.querySelector('.pc-body');
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
      const acs = document.querySelectorAll('.pc-box');
      acs.forEach(function (acc) {
        const header = acc.querySelector('.pc-header');
        const body = acc.querySelector('.pc-body');
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
      const groups = document.querySelectorAll('.pc-btn-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('pc-btn')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.pc-btn');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initAcLineGroups() {
      const groups = document.querySelectorAll('.pc-line-group');
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
      const groups = document.querySelectorAll('.pc-style-group');
      groups.forEach(function (group) {
        const handler = function (e) {
          let target = e.target;
          while (target && target !== group && !target.classList.contains('pop-style-item')) {
            target = target.parentElement;
          }
          if (!target || target === group) return;
          const buttons = group.querySelectorAll('.pc-style-item');
          buttons.forEach(function (b) { b.classList.remove('selected'); });
          target.classList.add('selected');
        };
        group.addEventListener('click', handler);
        listeners.push([group, 'click', handler]);
      });
    }

    function initRadioGroups() {
      const wrappers = document.querySelectorAll('[role="radiogroup"], .pc-radio-wrapper');
      wrappers.forEach(function (wrapper) {
        // 초기 동기화
        const radios = wrapper.querySelectorAll('input[type="radio"]');
        radios.forEach(function (r) {
          const lab = (r.closest && r.closest('.pc-radio-group')) ? r.closest('.pc-radio-group') : r.parentElement;
          if (!lab) return;
          if (r.checked) lab.classList.add('selected'); else lab.classList.remove('selected');
        });

        const handler = function (e) {
          const target = e.target;
          if (!target || target.type !== 'radio') return;
          const localRadios = wrapper.querySelectorAll('input[type="radio"]');
          localRadios.forEach(function (rr) {
            const lab = (rr.closest && rr.closest('.pc-radio-group')) ? rr.closest('.pc-radio-group') : rr.parentElement;
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
      <div className="pc-scroll">
        {/* <!-- <div className="page-info-box">
          자유형식 이미지를 생성하고 상품홍보 및 안내문을 만들 수 있습니다.
        </div> --> */}

        {/* <!-- POP지형 설정 --> */}
        <div id="popBox" className="pc-group">
          {/* <!-- POP 레이아웃 --> */}

          {/* <!-- 1.템플릿 디자인 --> */}
          <div className="pc-box collapsed">
            <div className="pc-header">
              <div className="pc-icon-num">1</div>
              <div className="pc-header-content">
                <div className="pc-title">템플릿 디자인<span className="pc-optional blue">필수</span></div>
                <div className="pc-description">템플릿 선택 후 수정이 가능합니다.</div>
              </div>

              <div className="pc-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
              </div>
            </div>
            <div className="pc-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pc-fieldset">
                {/* <div className="pc-label">템플릿 선택</div> */}
                <button type="button" className="pc-template-btn" onClick={onOpenPopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5ZM18 17L14 11L7 17H18Z"></path></svg>
                  템플릿 전체 보기
                </button>
              </div>
            </div>
          </div>
          {/* <!-- 2.색상테마 --> */}
          <div className="pc-box collapsed">
            <div className="pc-header">
              <div className="pc-icon-num">2</div>
              <div className="pc-header-content">
                <div className="pc-title">색상 테마</div>
                <div className="pc-description">템플릿의 색상 테마를 변경하세요</div>
              </div>
              <div className="pc-selected-group">
                <span className="pc-selected-item">미선택</span>
              </div>
              <div className="pc-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
              </div>
            </div>
            <div className="pc-body" style={{maxHeight: '0px', opacity: 0}}>
              {/* <!-- 디자인 스타일 --> */}
              <div className="pc-fieldset">
                <div className="pc-label">색상 테마</div>
                <div className="pc-line-group">
                  <button type="button" className="pc-line-btn yellow selected">
                    노랑
                  </button>
                  <button type="button" className="pc-line-btn">
                    빨강
                  </button>
                  <button type="button" className="pc-line-btn">
                    초록
                  </button>
                  <button type="button" className="pc-line-btn">
                    파랑
                  </button>
                  <button type="button" className="pc-line-btn">
                    흰색
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 3.상품홍보형-상품정보 --> */}
          <div className="pc-box collapsed">
            <div className="pc-header">
              <div className="pc-icon-num">3</div>
              <div className="pc-header-content">
                <div className="pc-title">상품정보</div>
                <div className="pc-description">프라이스카드에 넣을 상품정보 입력하세요</div>
              </div>
              <div className="pc-toggle">
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
              </div>
            </div>
            <div className="pc-body" style={{maxHeight: '0px', opacity: 0}}>
              <div className="pc-fieldset">
                <div className="pc-label">반복 디자인 설정<span>(최대 24개)</span></div>
                <div className="flex gap-1 items-center">
									<select id="selPricecardDirection" className="form-select">
										<option value="landscape">가로형</option>
										<option value="portrait" >세로형</option>
									</select>
									<input type="text" id="pricecardRowCount" data-row="3" className="form-input" />
									행
									<input type="text" id="pricecardColCount" data-col="2" className="form-input" />
									열
								</div>

                <div className="pc-label">상품 데이터 입력</div>
                <div className="flex gap-1">
                  <div id="selPopColumn" className="pc-line-group">
                    <button type="button" className="pc-line-btn selected" data-column="name">
                      <span className="text-red-500">*</span>상품명
                    </button>
                    <button type="button" className="pc-line-btn">
                      규격
                    </button>
                    <button type="button" className="pc-line-btn">
                      정상판매가
                    </button>
                    <button type="button" className="pc-line-btn selected" data-column="dcprice">
                      <span className="text-red-500">*</span>할인판매가
                    </button>
                    <button type="button" className="pc-line-btn">
                      할인율
                    </button>
                  </div>
                  <button type="button" className="pc-line-btn" style={{marginLeft: 'auto'}}>
                    행 비우기
                  </button>
                </div>
                <div id="pricecardExcel" data-count="4" className="grid-table" style={{gridTemplateRows: '24px repeat(5, 36px)', gridTemplateColumns: '44px 210px 90px 90px 90px', placeItems: 'center'}}>
                  <div>
                    <input type="checkbox" className="grid-check" id="pricecardAllRow" />No
                  </div>
                  <div className="grid-th">상품명</div>
                  <div className="grid-th">규격</div>
                  <div className="grid-th">정상판매가</div>
                  <div className="grid-th">할인판매가</div>
                  <div className="grid-td">
                    <input type="checkbox" className="grid-check" />1
                  </div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td">
                    <input type="checkbox" className="grid-check" />2
                  </div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td">
                    <input type="checkbox" className="grid-check" />3
                  </div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td">
                    <input type="checkbox" className="grid-check" />4
                  </div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                  <div className="grid-td"><input type="text" className="workspace-excel" /></div>
                </div>

                <div className="pc-label">
                  판매가 표시 단위
                </div>
                <div className="pc-line-group">
                  <button type="button" className="pc-line-btn selected" data-column="name">
                    AI 자동
                  </button>
                  <button type="button" className="pc-line-btn" data-column="name">
                    원(뒤)
                  </button>
                  <button type="button" className="pc-line-btn" data-column="name">
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