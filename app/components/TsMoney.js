'use client';
import React from 'react';
export default function TsMoney() {
  return (
    <div className="ts-wrap">
      <div className="ts-sticky">
        <div className="ts-card">
          <div className="ts-title">현재잔액 <button type="button" id="btnRefreshTS" className="ts-button" onClick={() => window.jsTSInfo && window.jsTSInfo()}>새로고침</button></div>
          <div className="ts-info-box">
            <div>
              <div className="ts-info-box-left">TS머니</div>
              <div className="flex">
                <span id="tsMoney" className="text-red-500">682,980</span>
                <span id="tsMoneyDecimal" className="text-gray-400">.5</span>
              </div>
            </div>
            <div>
              <div className="ts-info-box-left">TS포인트</div>
              <div className="flex">
                <span id="tsPoint" className="text-blue-500">0</span>
                <span id="tsPointDecimal" className="ts_decimal_part">.0</span>
              </div>
            </div>
            <hr className="ts-hr" />
            {/* <!-- 단가 안내--> */}
            <div>
              <div className="ts-title">AI이미지생성단가<span className="ts-text-small">(부가세포함)</span></div>
              <div className="flex">
                <span className="text-red-500">500</span>
                <span className="ts_decimal_part">.0</span>
              </div>

            </div>
            <hr className="ts-hr" />
            {/* <!-- 요금 안내 --> */}
            <div>
              <div className="ts-title">총차감액</div>
              <div className="flex">
                <span id="useTotal" className="text-red-500">500</span>
                <span id="useTotalDecimal" className="ts_decimal_part">.0</span>
              </div>
            </div>
            <div>
              <div className="ts-info-box-left">TS머니</div>
              <div className="flex">
                <span id="useMoney" className="text-red-500">500</span>
                <span id="useMoneyDecimal" className="ts_decimal_part">.0</span>
              </div>
            </div>
            <div>
              <div className="ts-info-box-left">TS포인트</div>
              <div className="flex">
                <span id="usePoint" className="text-red-500">0</span>
                <span id="usePointDecimal" className="ts_decimal_part">.0</span>
              </div>
            </div>
            <hr className="ts-hr" />
            <div>
              <div className="ts-title">차감 후 잔액</div>
            </div>
            <div>
              <div className="ts-info-box-left">TS머니</div>
              <div className="flex">
                <span id="remainMoney" className="text-red-500">682,480</span>
                <span id="remainMoneyDecimal" className="ts_decimal_part">.5</span>
              </div>
            </div>
            <div>
              <div className="ts-info-box-left">TS포인트</div>
              <div className="flex">
                <span id="remainPoint" className="text-blue-500">0</span>
                <span id="remainPointDecimal" className="ts_decimal_part">.0</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TS Account Infomation --> */}
        <div className="ts-card">
          <div className="ts-title">TS머니 전용계좌</div>
          <hr className="ts-hr" />
          <div id="tsBank" className="ts-bank">기업은행 431-192047-97-437</div>
          <div>
            예금주 : <span id="tsHolder" className="font-semibold text-gray-800">테스트그룹</span>
          </div>
        </div>
        <div className="ts-card">
          <div className="ts-tel">고객센터 <span>1577-4550</span></div>
          <div className="ts-fax">팩스 <span>032-363-4305</span></div>
          <hr className="ts-hr" />
          <div className="ts-copyright">Copyright(C) TOGETHERs co. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}