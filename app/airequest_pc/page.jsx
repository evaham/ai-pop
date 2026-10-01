"use client";

import resolveImageSrc from "../lib/resolveImageSrc";
import PcSideContentsLayout from "../components/PcSideContentsLayout";

export default function AiRequestPage() {
  return (
			<div className="wrap-layout">
				{/* <!-- 왼쪽 화면 --> */}
				<PcSideContentsLayout/>

				{/* <!-- 오른쪽 화면 --> */}
				<div className="main-contents-layout">
					<div className="workspace-preview">
						<div style={{display: "flex", gap: "10px"}}>
							<div style={{width: "810px", height: "810px", overflow: "auto", flexShrink: 0}}>
								<div id="pricecardFrame" className="workspace-preview-frame">
									<div id="pricecardCanvas" className="workspace-preview-canvas"
										style={{width: "566px", height: "800px", top: "5px", left: "122px", transformOrigin: "left top"}}></div>
									<div id="pricecardEditor" className="workspace-preview-canvas-editor"
										style={{width: "566px", height: "800px", transformOrigin: "left top"}}></div>
								</div>
							</div>
							<div className="workspace-flex-col" style={{flexGrow: 1, height: "810px", overflow: "auto", justifyContent: "flex-start", padding: "10px 10px 0 0", scrollbarGutter: "stable", maxWidth: "500px"}}>
								<div className="workspace-flex-row" style={{width: "100%", justifyContent: "center", gap: "10px"}}>
									<button type="button" className="workspace-btn-blue" style={{flex: 1}}>
										<div>이미지 생성하기</div>
									</button>
									<button type="button" className="workspace-btn-blue" style={{flex: 1, background: "#fff", color: "#26499d"}}>
										<div>템플릿으로 저장</div>
									</button>
								</div>
								{/* <!-- 배율 --> */}
								<div className="workspace-title">편집창 화면 크게 보기
									<div className="workspace-help tooltip1" data-tooltip="· 왼쪽 편집창 영역을 클릭 후 아래의 키를 동시에 누르시면 배율을 더 세밀하게 조정하실 수 있습니다.
									① Ctrl키와 +키 : 0.2씩 확대
									② Ctrl키와 -키 : 0.2씩 축소"></div>
								</div>
								<div id="selPricecardScale" className="workspace-flex-row">
									<button type="button" className="workspace-btn selected" style={{width: "80px"}}>
										<div className="workspace-info" style={{letterSpacing: "0"}}>1×</div>
									</button>
									<button type="button" className="workspace-btn" style={{width: "80px"}}>
										<div className="workspace-info" style={{letterSpacing: "0"}}>2×</div>
									</button>
									<button type="button" className="workspace-btn" style={{width: "80px"}}>
										<div className="workspace-info" style={{letterSpacing: "0"}}>3×</div>
									</button>
								</div>
								{/* <!-- 레이어 추가/삭제 --> */}
								<div className="workspace-title">레이어 추가 / 삭제
									<div className="workspace-help tooltip1" data-tooltip="· 텍스트 레이어를 더블클릭하시면 내용을 편집할 수 있습니다.
								· 편집창에서 레이어 선택 후 Ctrl키와 Delete키, 또는 Ctrl키와 ←키(Backspace)를 동시에 누르셔도 삭제됩니다."></div>
									<button type="button" className="workspace-btn" style={{padding: "3px 8px", margin: "-3px 0 3px auto"}}>
										<div className="workspace-info" style={{fontWeight: "500"}}>초기화</div>
									</button>
								</div>
								<div className="workspace-flex-row" style={{flexWrap: "wrap"}}>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">선</div>
									</button>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">사각형</div>
									</button>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">타원형</div>
									</button>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">삼각형</div>
									</button>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">텍스트</div>
									</button>
									<button type="button" className="workspace-btn">
										<div className="workspace-info">이미지파일</div>
									</button>
									<input type="file" id="pricecardImageFile" accept="image/jpeg,image/png" style={{display: "none"}} />
								</div>
								<div className="workspace-flex-row" style={{flexWrap: "wrap"}}>
									<button type="button" className="workspace-btn tint">
										<div className="workspace-info">복사하기</div>
									</button>
									<button type="button" className="workspace-btn tint">
										<div className="workspace-info">삭제하기</div>
									</button>
								</div>
								{/* <!-- 레이어 순서 --> */}
								<div className="workspace-title">레이어 순서</div>
								<div className="workspace-flex-row" style={{width: "100%", gap: "10px"}}>
									<div className="workspace-flex-col">
										<button type="button" className="workspace-btn" style={{width: "66px"}}>
											<div className="workspace-info">맨위로</div>
										</button>
										<button type="button" className="workspace-btn" style={{width: "66px"}}>
											<div className="workspace-info">위로</div>
										</button>
										<button type="button" className="workspace-btn" style={{width: "66px"}}>
											<div className="workspace-info">밑으로</div>
										</button>
										<button type="button" className="workspace-btn" style={{width: "66px"}}>
											<div className="workspace-info">맨밑으로</div>
										</button>
									</div>
									<div id="pricecardLayerOrder" className="workspace-layerbox"></div>
								</div>
								{/* <!-- 레이어 편집 --> */}
								<div className="workspace-title">레이어 편집
									{/* <!-- 편집모드 --> */}
									<div className="workspace-switch" style={{marginLeft: "auto"}}>
										<div className="workspace-help tooltip2" style={{marginRight: "-3px"}} data-tooltip="· 일괄모드
									: 첫번째 상품 편집창만 활성화되고, 첫번째 상품의 스타일이 모든 상품에 적용됩니다.
									· 개별모드 
									: 특정 상품의 레이어를 첫번째 상품의 스타일과 다르게 편집할 수 있습니다. 작업 내용이 해당 상품에만 적용됩니다.
									· 개별모드로 전환한 후 편집창에서 편집하고 싶은 상품 영역을 더블클릭하시면 해당 상품의 편집창이 활성화되어 레이어 편집이 가능해집니다.
									· 개별모드에서는 레이아웃 변경, 템플릿 사용, 상품 데이터 컬럼 선택 등이 제한됩니다."></div>
										일괄모드
										<label className="workspace-switch-check">
											<input type="checkbox" id="pricecardAllMode"  />
											<span className="workspace-switch-slider"></span>
										</label>
										개별모드
									</div>
								</div>
								<div className="workspace-box">
									<div className="workspace-title" style={{marginTop: "5px", marginBottom: "10px"}}>레이어 설정</div>
										<div id="pricecardEditShape" style={{display: "grid", gap: "5px 10px", gridTemplateColumns: "80px auto"}}>
										{/* <!-- 크기정보 --> */}
										<div className="workspace-small-title">크기</div>
										<div style={{fontSize: "14px", height: "28px"}}>
											가로 <input type="number" id="pricecardWidth" className="workspace-input" style={{width: "80px"}} step="5"
												min="0" defaultValue="0" />
											<div className="workspace-info" style={{display: "inline-block", marginRight: "10px"}}>px</div>
											세로 <input type="number" id="pricecardHeight" className="workspace-input" style={{width: "80px"}} step="5"
												min="0" defaultValue="0" />
											<div className="workspace-info" style={{display: "inline-block"}}>px</div>
										</div>
										{/* <!-- 위치정보 --> */}
										<div className="workspace-small-title">위치</div>
										<div style={{height: "28px"}}>
											<button type="button" id="pricecardUp" className="workspace-align-btn" style={{padding: "0px 8px"}}
>
												<span className="icon-arrow-up" style={{fontSize: "13px"}}></span>
											</button>
											<button type="button" id="pricecardDown" className="workspace-align-btn" style={{padding: "0px 8px"}}
>
												<span className="icon-arrow-down" style={{fontSize: "13px"}}></span>
											</button>
											<button type="button" id="pricecardLeft" className="workspace-align-btn" style={{padding: "0px 8px"}}
>
												<span className="icon-arrow-left" style={{fontSize: "13px"}}></span>
											</button>
											<button type="button" id="pricecardRight" className="workspace-align-btn" style={{padding: "0px 8px"}}
>
												<span className="icon-arrow-right" style={{fontSize: "13px"}}></span>
											</button>
										</div>
										<div className="workspace-small-title">회전</div>
										<div className="workspace-flex-row" style={{height: "28px"}}>
											<div>
												<button type="button" className="workspace-btn selected" style={{width: "36px"}}
>
													<div className="workspace-info"> 1˚</div>
												</button>
												<button type="button" className="workspace-btn" style={{width: "36px"}}
>
													<div className="workspace-info">15˚</div>
												</button>
											</div>
											<button type="button" id="pricecardTurnLeft" className="workspace-btn" style={{height: "25px"}}
												data-angleunit="1">
												<img src="/image-cloud/resources/img/ico_rotate_left.png" />
											</button>
											<input type="number" id="pricecardAngle" className="workspace-input" style={{width: "80px"}} step="5"
												defaultValue="0" autoComplete="off" />
											<div className="workspace-info" style={{fontSize: "16px", display: "inline-block"}}>˚</div>
											<button type="button" id="pricecardTurnRight" className="workspace-btn" style={{height: "25px"}}
												data-angleunit="1">
												<img src="/image-cloud/resources/img/ico_rotate_right.png" />
											</button>
										</div>
										{/* <!-- 색상 --> */}
										<div data-edit="fill" className="workspace-small-title">채우기 색상</div>
										<div data-edit="fill" className="workspace-flex-row" style={{height: "28px"}}>
											<input type="color" id="pricecardColorSelector"
												style={{background: "transparent", border: "none", width: "27px", height: "30px", margin: "-4px -2px", cursor: "pointer"}} />
											<div id="pricecardColor" style={{fontSize: "14px"}}>#000000</div>
										</div>
										{/* <!-- 선 굵기 --> */}
										<div data-edit="line" className="workspace-small-title hidden">선 굵기</div>
										<div data-edit="line" className="hidden">
											<input type="text" id="pricecardLineWidth" className="workspace-input" defaultValue="0"
												/>
											<div className="workspace-info" style={{display: "inline-block"}}>px</div>
										</div>
										{/* <!-- 선 끝모양 --> */}
										<div data-edit="line" className="workspace-small-title hidden">선 끝모양</div>
										<select id="pricecardLineCap" data-edit="line" className="workspace-select hidden" style={{width: "100px"}}
>
											<option defaultValue={"square"} >사각 모양</option>
											<option defaultValue={"round"}>둥근 모양</option>
											<option defaultValue={"arrow"}>화살표</option>
										</select>
										{/* <!-- 테두리 색상 --> */}
										<div data-edit="border" className="workspace-small-title">테두리 색상</div>
										<div data-edit="border" className="workspace-flex-row" style={{height: "28px"}}>
											<input type="color" id="pricecardBorderColorSelector"
												style={{background: "transparent", border: "none", width: "27px", height: "30px", margin: "-4px -2px", cursor: "pointer"}}
/>
											<div id="pricecardBorderColor" style={{fontSize: "14px", width: "65px"}}>#000000</div>
											<input type="number" id="pricecardBorderWidth" className="workspace-input" step="5" defaultValue="1"
												/>
											<div className="workspace-info" style={{marginLeft: "-3px", marginRight: "3px", display: "inline-block"}}>px
											</div>
											<label className="workspace-switch-check">
												<input type="checkbox" id="pricecardBorder"  />
												<span className="workspace-switch-slider"></span>
											</label>
											<div id="pricecardBorderColorless" style={{width: "23px", height: "22px", border: "1px solid #777", marginLeft: "3px", display: "inline-block", background: "linear-gradient(to left top, transparent 46%, red 49%, transparent 52%) white"}}
												>
											</div>
										</div>
									</div>
								</div>
								<div id="pricecardEditFont" className="workspace-box" style={{marginTop: "3px"}}>
									<div className="workspace-title" style={{marginTop: "5px", marginBottom: "10px"}}>텍스트 설정</div>
									<div style={{display: "grid", gap: "5px 10px", gridTemplateColumns: "80px auto"}}>
										{/* <!-- 글꼴 --> */}
										<div className="workspace-small-title">글꼴 </div>
										<div className="flex gap-1" style={{height: "28px"}}>
											<select id="pricecardFont" className="workspace-select">
												<option defaultValue="">프리텐다드(기본)</option>
												<option defaultValue="workspace-webfont-1">G마켓산스</option>
												<option defaultValue="workspace-webfont-2">페이퍼로지</option>
												<option defaultValue="workspace-webfont-3">학교안심둥근미소</option>
												<option defaultValue="workspace-webfont-4">경기천년제목체</option>
												<option defaultValue="workspace-webfont-5">가나초콜릿체</option>
												<option defaultValue="workspace-webfont-6">세방고딕</option>
												<option defaultValue="workspace-webfont-7">푸라닭젠틀고딕</option>
												<option defaultValue="workspace-webfont-8">넥센타이어</option>
												<option defaultValue="workspace-webfont-9">KBIZ한마음명조체</option>
												<option defaultValue="workspace-webfont-10">김포평화바탕</option>
											</select>
											<button type="button" className="workspace-btn">
												<div className="workspace-info">보기</div>
											</button>
										</div>
										{/* <!-- 글씨 굵기 --> */}
										<div className="workspace-small-title">크기/서식</div>
										<div className="workspace-flex-row" style={{gap: "8px", height: "28px"}}>
											<input type="text" />
											<input type="number" id="pricecardFontSize" className="workspace-input" step="5" min="5" defaultValue="0" />
											<div className="workspace-info" style={{display: "inline-block", marginLeft: "-5px"}}>px</div>
											<button type="button" className="workspace-btn" id="pricecardFontWeight">
												<div className="workspace-info">굵게</div>
											</button>
											<button type="button" className="workspace-btn" style={{fontStyle: "italic"}} id="pricecardFontStyle">
												<div className="workspace-info">기울임</div>
											</button>
											<div id="pricecardFontAlign" style={{height: "26px"}}>
												<button type="button" id="pricecardFontAlignLeft" className="workspace-align-btn left"
													data-align="left" defaultValue="left"></button>
												<button type="button" id="pricecardFontAlignCenter" className="workspace-align-btn center"
													data-align="center" defaultValue="center"></button>
												<button type="button" id="pricecardFontAlignRight" className="workspace-align-btn right"
													data-align="right" defaultValue="right"></button>
											</div>
										</div>
										{/* <!-- 줄바꿈 허용 --> */}
										<div className="workspace-small-title">줄바꿈 허용</div>
										<div className="workspace-switch" style={{height:"28px"}}>
											<label className="workspace-switch-check">
												<input type="checkbox" id="pricecardWrap"  /> 
												<span className="workspace-switch-slider"></span>
											</label>
											<div className="workspace-help tooltip3" data-tooltip="· 줄바꿈 허용 상태 : 글자가 변형되지 않고 레이어의 가로 길이에 맞춰 줄바꿈됩니다.
											· 줄바꿈하고 싶은 위치에서 Shift키와 Enter키를 동시에 누르시면 입력란에는 {줄바꿈}으로 표시되고 편집창에는 줄바꿈 되어 나타납니다. 
												① 상품 데이터 레이어 : 데이터 입력란에서 Shift키와 Enter키를 동시에 누르십시오.
												② 사용자 생성 텍스트 레이어 : 레이어를 더블클릭하여 수정모드에서 Shift키와 Enter키를 동시에 누르십시오."></div>
										</div>
										{/* <!-- 단위 크기 --> */}
										<div data-edit="unit" className="workspace-small-title">원표기 크기</div>
										<div data-edit="unit" style={{height: "28px"}}>
											<input type="number" id="pricecardUnitSize" className="workspace-input" step="5" min="5" defaultValue="0"
												/>
											<div className="workspace-info" style={{display: "inline-block"}}>px</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style={{position: "absolute", top: "0", left: "0", zIndex: 2, padding: "4px 8px", fontSize: "14px"}}>
						<span id="pricecardScale">1</span>×
					</div>
				</div>
		</div>
  );
}
