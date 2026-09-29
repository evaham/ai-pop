'use client';
import React from 'react';
import PopSideContentsLayout from '../components/PopSideContentsLayout';
import TsMoney from '../components/TsMoney';

export default function AirequestPop() {
  const promoSamples = [
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './그림2.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './그림3.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './그림4.png', alt: '샘플 이미지 3' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './그림5.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './그림6.png', alt: '샘플 이미지 5' },
    { title: '고급 마켓 스타일', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './1001_20260908_094048489.jpg', alt: '샘플 이미지 6' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './그림7.png', alt: '샘플 이미지 7' }
  ];
  const noticeSamples = [
    { title: '신선 마켓', highlights: ['가격강조', '상품강조'], img: './안내공지_신선마켓.png', alt: '샘플 이미지 1' },
    { title: '컬러 임펙트 스타일', highlights: ['가격강조', '상품강조'], img: './안내공지_컬러임팩트.png', alt: '샘플 이미지 2' },
    { title: '네추럴 심플', highlights: ['가격강조', '행사강조'], img: './안내공지_내추럴심플.png', alt: '샘플 이미지 3' },
    { title: '고급 마켓', highlights: ['상품강조'], img: './안내공지_고급마켓.png', alt: '샘플 이미지 4' },
    { title: '칠판 일러스트', highlights: ['가격강조'], img: './안내공지_칠판일러스트.png', alt: '샘플 이미지 5' },
    { title: '팝아트 일러스트', highlights: ['가격강조','신선도강조','행사강조','상품강조'], img: './그림7.png', alt: '샘플 이미지 6' }
  ];
  return (
      <div className="wrap-layout">
        {/* <!-- 왼쪽 화면 --> */}
        <PopSideContentsLayout/>
        
        <div className="main-contents-layout" style={{width: '924px', background: '#fff'}}>
          <div className="cre-contents">
            <div className="cre-header">
              <p className="cre-title">디자인 샘플보기</p>
              <p className="cre-subtitle">마음에 드는 디자인을 선택하시면 옵션 선택에 반영됩니다.</p>
            </div>
            <div className="cre-body">
              <div className="cre-list-tit">상품홍보형 템플릿</div>
              <div className="cre-list-wrapper" aria-label="상품홍보형 샘플">
                <div className="cre-item-list">
                  {promoSamples.map((s, idx) => (
                    <div className="item" key={idx}>
                      <div className="item-description">{s.title}</div>
                      {/* 강조포인트 옵션에 따라 화면에 표시 */}
                      <div className="highlight-options">
                        {s.highlights.map((h) => (
                          <div className="highlight" key={h}>{h}</div>
                        ))}
                      </div>
                      <div className="content">
                        <img src={s.img} alt={s.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <!-- 안내공지형 샘플 --> */}
              <div className="cre-list-tit">안내/공지형 템플릿</div>
              <div className="cre-list-wrapper" aria-label="안내공지형 샘플">
                <div className="cre-item-list">
                  {noticeSamples.map((s, idx) => (
                    <div className="item" key={idx}>
                      <div className="item-description">{s.title}</div>
                      {/* 강조포인트 옵션에 따라 화면에 표시 */}
                      <div className="highlight-options">
                        {s.highlights.map((h) => (
                          <div className="highlight" key={h}>{h}</div>
                        ))}
                      </div>
                      <div className="content">
                        <img src={s.img} alt={s.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button className="cre-more-button">더보기</button>
              </div>
            </div>
          </div>
        </div>

        <TsMoney />
      </div>
  );
}