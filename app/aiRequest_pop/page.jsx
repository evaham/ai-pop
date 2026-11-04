'use client';
import { useState } from 'react';
import PopSideContentsLayout from '../components/PopSideContentsLayout';
import resolveImageSrc from "../lib/resolveImageSrc";


export default function AiRequestPop() {
  const [filter, setFilter] = useState('all'); // 'all' | 'promo' | 'notice'
  const promoSamples = [
    { title: '심플', img_type: 'vertical', img: './img/아보카도_네추럴심플.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/1-1.png', alt: '제주산 갈치' },
    { title: '컬러 임펙트', img_type: 'vertical', img: './img/1-2.png', alt: '샘플 이미지 4' },
    { title: '고급 마켓', img_type: 'vertical', img: './img/1-4.png', alt: '샘플 이미지 7' },
    { title: '칠판 일러스트', img_type: 'vertical', img: './img/1-5.png', alt: '샘플 이미지 9' },
    { title: '고급 마켓', img_type: 'vertical', img: './img/1-6.png', alt: '샘플 이미지 10' },
    { title: '컬러 임펙트', img_type: 'vertical', img: './img/1-7.png', alt: '샘플 이미지 11' },
    { title: '심플', img_type: 'vertical', img: './img/심플_나노바나나.jpg', alt: '샘플 이미지 12' },
    { title: '컬러 임펙트', img_type: 'vertical', img: './img/일러스트_openai3.png', alt: '샘플 이미지 12' },
    { title: '컬러 임펙트', img_type: 'vertical', img: './img/1-8.jpg', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/openai_내추럴심플.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/1-3.png', alt: '샘플 이미지 6' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/openai_신선마켓1.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/openai_내추럴심플2.png', alt: '샘플 이미지 12' },
    { title: '레트로 마켓', img_type: 'vertical', img: './img/openai_레트로6_안내공지.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/openai_신선마켓1.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/openai_신선마켓3.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/openai_신선마켓4.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/openai_심플_상품10개.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/openai_심플1.png', alt: '샘플 이미지 12' },
    { title: '칠판 일러스트', img_type: 'vertical', img: './img/openai_칠판일러_상품10개1.png', alt: '샘플 이미지 12' },
    { title: '고급 마켓', img_type: 'vertical', img: './img/고급마켓_openai.png', alt: '샘플 이미지 12' },
    { title: '고급 마켓', img_type: 'vertical', img: './img/고급마켓_나노바나나.jpg', alt: '샘플 이미지 12' },
    { title: '그림', img_type: 'vertical', img: './img/그림1.png', alt: '샘플 이미지 12' },
    { title: '레트로 마켓', img_type: 'vertical', img: './img/그림8.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/네추럴심플.png', alt: '샘플 이미지 12' },
    { title: '레트로 마켓', img_type: 'vertical', img: './img/레트로1_나노바나나.jpg', alt: '샘플 이미지 12' },
    { title: '손그림 일러스트', img_type: 'vertical', img: './img/손그림일러스트_openai_썸넬2.png', alt: '샘플 이미지 12' },
    { title: '손그림 일러스트', img_type: 'vertical', img: './img/손그림일러스트_나노바나나.jpg', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/신선마켓_openai.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/신선마켓_나노바나나.jpg', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/심플_openai2.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/심플_openai3.png', alt: '샘플 이미지 12' },
    { title: '신선 마켓', img_type: 'vertical', img: './img/아보카도_신선마켓.png', alt: '샘플 이미지 12' },
    { title: '팝아트 일러스트', img_type: 'vertical', img: './img/일러스트_openai.png', alt: '샘플 이미지 12' },
    { title: '팝아트 일러스트', img_type: 'vertical', img: './img/일러스트_openai2.png', alt: '샘플 이미지 12' },
    { title: '팝아트 일러스트', img_type: 'vertical', img: './img/일러스트_openai4.png', alt: '샘플 이미지 12' },
    { title: '컬러 임펙트', img_type: 'vertical', img: './img/컬러임팩트_openai.png', alt: '샘플 이미지 12' },
    { title: '심플', img_type: 'vertical', img: './img/호빵_네추럴심플.png', alt: '샘플 이미지 12' },
  ];
  const noticeSamples = [
    { title: '신선 마켓', img_type: 'vertical', img: './img/2-1.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', img_type: 'vertical', img: './img/2-2.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', img_type: 'vertical', img: './img/2-3.png', alt: '샘플 이미지 3' },
    { title: '레트로', img_type: 'vertical', img: './img/openai_레트로6_안내공지.png', alt: '샘플 이미지 3' },
    { title: '고급 마켓', img_type: 'vertical', img: './img/2-4.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', img_type: 'vertical', img: './img/2-5.png', alt: '샘플 이미지 5' },
    { title: '팝아트 일러스트', img_type: 'vertical', img: './img/2-6.png', alt: '샘플 이미지 6' }
  ];
  const listTitles = { all: '전체 템플릿', promo: '상품홍보형 템플릿', notice: '안내/공지형 템플릿' };
  const visibleSamples = [
    ...(filter !== 'notice' ? promoSamples.map((s) => ({ ...s, type: 'promo' })) : []),
    ...(filter !== 'promo' ? noticeSamples.map((s) => ({ ...s, type: 'notice' })) : []),
  ];
  return (
      <div className="wrap-layout">
        {/* <!-- 왼쪽 화면 --> */}
        <PopSideContentsLayout/>
        <div className="main-contents-layout">
          <div className="sample-contents mx-auto" style={{width: '924px'}}>
            <div className="sample-header">
              <p className="sample-title">디자인 샘플보기</p>
              <p className="sample-subtitle">마음에 드는 디자인을 선택하시면 옵션 선택에 반영됩니다.</p>
              <div className="sample-filter">
                <button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>전체</button>
                <button className={filter === 'promo' ? 'selected' : ''} onClick={() => setFilter('promo')}>상품홍보형</button>
                <button className={filter === 'notice' ? 'selected' : ''} onClick={() => setFilter('notice')}>안내공지형</button>
              </div>
            </div>
            <div className="sample-body">
              <div className="sample-list-tit">{listTitles[filter]}</div>
              <div className="sample-list-wrapper" aria-label="디자인 샘플">
                <div className="sample-list">
                  {visibleSamples.map((s, idx) => (
                    <div className="item" key={`${s.type}-${idx}`}>
                      <div className="item-description">{s.title}</div>
                      <div className="content">
                        <img src={resolveImageSrc(s.img)} alt={s.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


