'use client';

import { useState } from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormTextarea from "../components/FormTextarea";

export default function UiView() {

    return (
        <div className="flex flex-col gap-2 my-4 mx-4">
          <div className="text-lg font-bold">UI 스타일 가이드</div>
          <div className="text-base mt-4">버튼</div>
          <div className="flex gap-5">
            <div>
              기본
              <FormButton>기본버튼</FormButton>
            </div>
            <div>
              Primary
              <FormButton variant="primary">Primary 버튼</FormButton>
            </div>
            <div>
              Secondary
              <FormButton variant="secondary">Secondary 버튼</FormButton>
            </div>
            <div>
              Tertiary
              <FormButton variant="tertiary">Tertiary 버튼</FormButton>
            </div>
            <div>
              아이콘
              <FormButton variant="primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
                아이콘이 있는 버튼
              </FormButton>
            </div>
          </div>
          <div className="text-base mt-4">상태</div>
          <div className="flex gap-5">
            <div>
              default
              <FormButton variant="default">기본버튼</FormButton>
            </div>
            <div>
              hover
              <FormButton variant="default" hover={true}>hover 버튼</FormButton>
            </div>
            <div>
              active
              <FormButton variant="default" active={true}>active 버튼</FormButton>
            </div>
            <div>
              disabled
              <FormButton variant="default" disabled={true}>disabled 버튼</FormButton>
            </div>
            <div>
              selected
              <FormButton variant="default" selected={true}>selected 버튼</FormButton>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <FormButton variant="primary">기본버튼</FormButton>
            </div>
            <div>
              <FormButton variant="primary" hover={true}>hover 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="primary" active={true}>active 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="primary" disabled={true}>disabled 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="primary" selected={true}>selected 버튼</FormButton>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <FormButton variant="secondary">기본버튼</FormButton>
            </div>
            <div>
              <FormButton variant="secondary" hover={true}>hover 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="secondary" active={true}>active 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="secondary" disabled={true}>disabled 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="secondary" selected={true}>selected 버튼</FormButton>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <FormButton variant="tertiary">기본버튼</FormButton>
            </div>
            <div>
              <FormButton variant="tertiary" hover={true}>hover 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="tertiary" active={true}>active 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="tertiary" disabled={true}>disabled 버튼</FormButton>
            </div>
            <div>
              <FormButton variant="tertiary" selected={true}>selected 버튼</FormButton>
            </div>
          </div>
          <div className="text-base mt-4">입력폼</div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <FormInput type="text" className="w-50" placeholder="텍스트" />
              <FormInput type="email" className="w-50" placeholder="이메일" />
              <FormInput type="number" className="w-20 text-right" placeholder="숫자" />
              <FormInput type="password" className="w-20" placeholder="비밀번호" />
              <FormInput type="search" className="w-20" placeholder="검색" />
              <FormInput type="tel" className="w-20" placeholder="전화번호" />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                default
                <FormInput type="text" className="w-50" placeholder="텍스트" />
              </div>
              <div className="flex flex-col gap-2">
                focus
                <FormInput type="text" className="w-50" placeholder="텍스트" focus={true} />
              </div>
              <div className="flex flex-col gap-2">
                disabled
                <FormInput type="text" className="w-50" placeholder="텍스트" disabled={true} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" />
              </div>
              <div className="flex flex-col gap-2">
                <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" focus={true} />
              </div>
              <div className="flex flex-col gap-2">
                <FormTextarea className="w-50" rows={3} placeholder="내용을 입력하세요" disabled={true} />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <FormSelect className="w-50">
                  <option value="">선택하세요</option>
                  <option value="one">옵션 1</option>
                  <option value="two">옵션 2</option>
                </FormSelect>
              </div>
              <div className="flex flex-col gap-2">
                <FormSelect className="w-50" focus={true}>
                  <option value="">선택하세요</option>
                  <option value="one">옵션 1</option>
                  <option value="two">옵션 2</option>
                </FormSelect>
              </div>
              <div className="flex flex-col gap-2">
                <FormSelect className="w-50" disabled={true}>
                  <option value="">선택하세요</option>
                  <option value="one">옵션 1</option>
                  <option value="two">옵션 2</option>
                </FormSelect>
              </div>
            </div>
          </div>
        </div>
    );
}