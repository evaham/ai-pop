<div id="popupLayer" class="popup-layer">
		<div class="popup-background"></div>
		<div class="popup-content">
			<!-- 레이어1 -->
			<div id="pricecardTemplate" class="popup-content-group hidden" style="width: 300px;">
				<button type="button" class="popup-close-btn" onclick="jsCloseLayer()"></button>
				<div class="popup-content-title">템플릿명을 입력해 주십시오.</div>
				<div class="popup-content-text">
					편집창의 활성화 된 레이어들을 템플릿으로 저장합니다.<br>
					템플릿명에 작은따옴표는 사용할 수 없습니다.					
				</div>
				<input type="text" class="form-input" style="margin-top:8px; width: 100%" id="pricecardTemplateTitle" onkeyup="jsGetByte(this, 50)">
				<div class="form-text-byte">
					<span id="pricecardTemplateTitleByte">0</span> / 50 byte
				</div>
				<div class="popup-content-buttons justify-center">
					<button type="button" id="btnTemplateUpdate" class="point-btn-blue">
						<div>현재 템플릿 수정하기</div>
					</button>
					<button type="button" id="btnTemplateInsert" class="point-btn-blue" onclick="jsSaveTemplate2(0)">
						<div>새 템플릿으로 저장하기</div>
					</button>
				</div>
			</div>
			<!-- 레이어2 -->
			<div id="pricecardImageBox" class="popup-content-group hidden">
				<button type="button" class="popup-close-btn" onclick="jsCloseLayer()"></button>
				<div class="popup-content-title">이미지 생성 완료</div>
				<hr class="popup-content-divider">
				<div class="flex gap-4">
					<div class="flex-1 flex items-center justify-center bg-gray-50 p-4">
						<img id="pricecardImage" src="" class="max-w-full max-h-full border">
					</div>
					<div id="pricecardImageInfo" class="popup-content-infobox">
						<div class="popup-content-buttons">
							<button type="button" class="line-btn" onclick="jsPrint()">
								<div>인쇄하기</div>
							</button>
							<button type="button" class="line-btn" onclick="jsDownload('Info')">
								<div>다운로드</div>
							</button>
						</div>
						<div>
							<div class="popup-content-infobox-title">생성일</div>
							<div id="pricecardImageRgstDate" class="popup-content-infobox-text"></div>
						</div>
						<div>
							<div class="popup-content-infobox-title">선택유형</div>
							<div class="popup-content-infobox-dl">
								<div class="popup-content-infobox-dt">이미지유형</div>
								<div>프라이스카드</div>								
							</div>
							<div class="popup-content-infobox-dl">
								<div class="popup-content-infobox-dt">레이아웃</div>
								<div id="pricecardImageLayout"></div>								
							</div>
						</div>
						<div>
							<div class="popup-content-infobox-title">이미지정보</div>
							<div class="popup-content-infobox-dl">
								<div class="popup-content-infobox-dt">사이즈</div>
								<div id="pricecardImageSize"></div>								
							</div>
							<div class="popup-content-infobox-dl">
								<div class="popup-content-infobox-dt">용량</div>
								<div id="pricecardImageByte"></div>								
							</div>
						</div>
						<div>
							<div class="popup-content-infobox-title">보관기간</div>
							<div id="pricecardImageExprDate" class="popup-content-infobox-text"></div>
						</div>
					</div>
					<div id="pricecardImageError" class="popup-content-infobox hidden">
						<div class="popup-content-buttons">
							<button type="button" class="line-btn" onclick="jsPrint()">
								<div>인쇄하기</div>
							</button>
							<button type="button" class="line-btn" onclick="jsDownload('Error')">
								<div>다운로드</div>
							</button>
						</div>
						<div>
							<div>
								이미지는 생성되었으나 <span id="pricecardImageErrorMsg" class="text-red-500"></span><br>
								해당 이미지는 센터에 저장되지 않았으니<br>
								<span class="text-red-500">꼭 다운로드 받으시기 바랍니다.</span><br>
								템플릿으로 저장하시면 다시 만드실 수 있습니다.
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 레이어3 -->
			<div id="pricecardTemplateBox" class="popup-content-group" style="height:800px;">
				<button type="button" class="popup-close-btn" onclick="jsCloseLayer()"></button>
				<div class="popup-content-title" style="display:flex;">
					<div class="popup-content-templatebox-tab selected" data-show="mart" data-hidden="center" onclick="jsSelectTemplateBox(this)">매장템플릿</div>
					<div class="popup-content-templatebox-tab" data-show="center" data-hidden="mart" onclick="jsSelectTemplateBox(this)">센터템플릿</div>
				</div>
				<div id="martTemplateBox" class="popup-content-templatebox">
					
					
						
							
								
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="21" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="21" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:400.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 568px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#ff0000" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="image" style="width: 228.207px; height: 284.945px; top: 47px; left: 4px; transform-origin: center center; transform: rotate(0deg);"><div class="workspace-preview-layer-content"><img src="http://tdc-api-dev-3.togethers.kr:2004/ImagePriceCard/1001/1001_20260901_164235135.png" style="width:100%; height:100%; object-fit:contain;" draggable="false"></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 505px; height: 83px; top: 131px; left: 41px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 501px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 283px; height: 111px; top: 279px; left: 257px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 70px; line-height: 80px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 371px; min-height: max-content; transform: scaleX(0.75);" class="workspace-webfont-1">할인판매가<span style="display: inline-block; font-size: 30px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 115px; height: 43px; top: 208px; left: 424px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 111px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="nowrap" style="min-height: max-content; width: 474px; height: 77px; top: 15px; left: 30px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(240, 0, 0); font-weight: bold; font-size: 65px; line-height: 65px; font-style: italic; text-align: center; paint-order: stroke; padding: 5px 10px; min-height: max-content; -webkit-text-stroke: 10px rgb(255, 255, 255); white-space: nowrap; transform-origin: left top; width: 470px; transform: scaleX(1);" ondblclick="jsEditableText(this)" class="workspace-webfont-1">가 격 파 괴</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="21" onclick="jsSelectTemplate2(this)">
											가격파괴 (세로형,2×1)
										</button>
										<button type="button" class="line-btn" style="width: 50px; color: #fb2c36; padding: 2px;" data-template="21" data-title="가격파괴 (세로형,2×1)" onclick="jsRemoveTemplate(this)">
											삭제
										</button>
									</div>
								</div>							
							
								
								
								
								
									
									
										
										
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="18" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="18" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:400.0px; height:141.5px; zoom: 0.75;">
											<div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 390px; height: 43px; top: 44px; left: 11px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 387px; min-height: max-content; transform: scaleX(1);">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 200px; height: 53px; top: 92px; left: 198px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 40px; line-height: 45px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 197px; min-height: max-content; transform: scaleX(1);">할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 432px; height: 52px; top: -3px; left: -5px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#ff0000" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="nowrap" style="width: 247px; height: 43px; top: 3px; left: 83px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="20" style="color: rgb(252, 252, 252); font-weight: normal; font-size: 30px; line-height: 35px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 259px; min-height: max-content; transform: scaleX(0.94);" ondblclick="jsEditableText(this)" class="workspace-webfont-7">/ 행 / 사 / 상 / 품 /</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.75×</div>
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="18" onclick="jsSelectTemplate2(this)">
											샘플 (가로형,4×2)
										</button>
										<button type="button" class="line-btn" style="width: 50px; color: #fb2c36; padding: 2px;" data-template="18" data-title="샘플 (가로형,4×2)" onclick="jsRemoveTemplate(this)">
											삭제
										</button>
									</div>
								</div>							
							
								
								
								
								
									
										
										
									
									
								
								
								
								<div data-template="17" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="17" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:283.0px; height:266.6666666666667px; zoom: 1;">
											<div class="workspace-preview-layer" data-shape="line" style="width: 199px; top: 217px; left: 71px; height: 48px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 48" preserveAspectRatio="none"><defs><marker id="arrow_0__0__0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="15" y1="24" x2="184" y2="24" stroke="#ffff00" data-marker="0__0__0" stroke-width="30" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 342px; height: 119px; top: -32px; left: -31px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="50" ry="50" fill="#ffff00" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 196px; height: 69px; top: 196px; left: 73px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(225, 33, 20); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 261px; -webkit-text-stroke: 0px rgb(255, 255, 255); min-height: max-content; transform: scaleX(0.74);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 35px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 378px; height: auto; top: 20px; left: -49px; min-height: max-content;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(8, 8, 8); font-weight: bold; font-size: 40px; line-height: 55px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; -webkit-text-stroke: 0px rgb(8, 8, 8); min-height: max-content; transform-origin: left top; width: 376px; transform: scaleX(1);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 68px; height: 38px; top: 80px; left: 318px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 22px; line-height: 27px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 66px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 33px; top: 156px; left: 8px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(143, 143, 143); font-weight: bold; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(143, 143, 143); white-space: nowrap; transform-origin: left top; width: 114px; min-height: max-content; transform: scaleX(0.86);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 20px;">￦</span>정상판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 116px; top: 159px; left: 10px; height: 30px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 30" preserveAspectRatio="none"><defs><marker id="arrow_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="0" y1="15" x2="113" y2="15" stroke="#080808" data-marker="1" stroke-width="3" marker-end="url(#arrow_1)"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="17" onclick="jsSelectTemplate2(this)">
											심플_노랑 (세로형,3×2)
										</button>
										<button type="button" class="line-btn" style="width: 50px; color: #fb2c36; padding: 2px;" data-template="17" data-title="심플_노랑 (세로형,3×2)" onclick="jsRemoveTemplate(this)">
											삭제
										</button>
									</div>
								</div>							
							
								
								
								
								
									
										
										
									
									
								
								
								
								<div data-template="12" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="12" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:283.0px; height:200.0px; zoom: 1;">
											<div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 273px; height: 47px; top: 47px; left: 5px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(110, 246, 73); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: center; paint-order: stroke; padding: 5px 10px; white-space: nowrap; transform-origin: left top; width: 271px; min-height: max-content; -webkit-text-stroke: 5px rgb(51, 51, 51); transform: scaleX(1);" class="workspace-webfont-10">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 229px; height: 89px; top: 126px; left: 27px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(0, 97, 0); font-weight: bold; font-size: 60px; line-height: 65px; font-style: italic; text-align: right; paint-order: stroke; padding: 3px 9px 3px 6px; white-space: nowrap; transform-origin: left top; width: 336px; min-height: max-content; -webkit-text-stroke: 6px rgb(168, 255, 223); transform: scaleX(0.68);" class="workspace-webfont-8">할인판매가<span style="display: inline-block; font-size: 25px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 285px; height: 45px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#125200" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 275px; min-height: max-content; width: 275px; height: auto; top: 8px; left: 6px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; min-height: max-content;" ondblclick="jsEditableText(this)" class="workspace-webfont-4">🍏산지직송 싱싱한 야채·청과🥦</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 260px; top: 74px; left: 10px; height: 42px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 42" preserveAspectRatio="none"><defs><marker id="arrow_0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="1" y1="21" x2="259" y2="21" stroke="#00ff00" data-marker="0" stroke-width="2" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="12" onclick="jsSelectTemplate2(this)">
											야채청과 (세로형,4×2)
										</button>
										<button type="button" class="line-btn" style="width: 50px; color: #fb2c36; padding: 2px;" data-template="12" data-title="야채청과 (세로형,4×2)" onclick="jsRemoveTemplate(this)">
											삭제
										</button>
									</div>
								</div>							
							
								
								
								
								
									
									
										
										
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="9" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="9" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:400.0px; height:283.0px; zoom: 0.75;">
											<div class="workspace-preview-layer" data-shape="ellipse" style="width: 44px; height: 43px; top: 206px; left: 13px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="50" ry="50" fill="#ebf6ff" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 328px; height: 100px; top: -49px; left: -7px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#2c74e8" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 296px; height: 140px; top: 11px; left: -60px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 140" preserveAspectRatio="none"><ellipse cx="148" cy="70" rx="145.5" ry="67.5" fill="#ffffff" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 121px; height: 119px; top: 25px; left: 5px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="50" ry="50" fill="#c9d9f8" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 296px; height: 140px; top: -44px; left: 202px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 140" preserveAspectRatio="none"><ellipse cx="148" cy="70" rx="145.5" ry="67.5" fill="#2c74e8" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 13px; left: 231px; transform-origin: center center; transform: rotate(0deg);"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 30px; line-height: 35px; font-style: italic; text-align: left; paint-order: stroke; padding: 3px 10px 3px 3px; min-height: max-content;" ondblclick="jsEditableText(this)" class="workspace-webfont-5">한정수량!</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="image" style="width: 167px; height: 73px; top: 134px; left: 31px;"><div class="workspace-preview-layer-content"><img src="http://tdc-api-dev-3.togethers.kr:2004/ImagePriceCard/1001/1001_20260902_154600338.png" style="width:100%; height:100%; object-fit:contain;" draggable="false"></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 242px; height: 41px; top: 163px; left: 31px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 20px; line-height: 33px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 239px; min-height: max-content; transform: scaleX(1);">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 47px; top: 166px; left: 283px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 156px; min-height: max-content; transform: scaleX(0.62);" class="workspace-webfont-2">정상판매가<span style="display: inline-block; font-size: 20px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 369px; height: 86px; top: 47px; left: 5px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 65px; line-height: 70px; font-style: normal; text-align: left; paint-order: stroke; padding: 8px 15px; white-space: nowrap; transform-origin: left top; width: 366px; -webkit-text-stroke: 15px rgb(6, 71, 172); min-height: max-content; transform: scaleX(1);" class="workspace-webfont-3">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 300px; height: 81px; top: 198px; left: 92px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(176, 7, 7); font-weight: bold; font-size: 65px; line-height: 70px; font-style: italic; text-align: right; paint-order: stroke; padding: 3px 10px 3px 3px; white-space: nowrap; transform-origin: left top; width: 374px; -webkit-text-stroke: 0px rgb(255, 255, 255); min-height: max-content; transform: scaleX(0.79);" class="workspace-webfont-1">할인판매가<span style="display: inline-block; font-size: 50px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w" style="cursor: w-resize;"></div><div class="workspace-preview-layer-handle h-s" data-dir="s" style="cursor: s-resize;"></div><div class="workspace-preview-layer-handle h-e" data-dir="e" style="cursor: e-resize;"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw" style="cursor: nw-resize;"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw" style="cursor: sw-resize;"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne" style="cursor: ne-resize;"></div><div class="workspace-preview-layer-handle h-se" data-dir="se" style="cursor: se-resize;"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.75×</div>
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="9" onclick="jsSelectTemplate2(this)">
											2*2 (가로형,2×2)
										</button>
										<button type="button" class="line-btn" style="width: 50px; color: #fb2c36; padding: 2px;" data-template="9" data-title="2*2 (가로형,2×2)" onclick="jsRemoveTemplate(this)">
											삭제
										</button>
									</div>
								</div>							
							
						
						
					
				</div>
				<div id="centerTemplateBox" class="popup-content-templatebox hidden">
					
						
							
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="19" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="19" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:200.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 156px; height: 137px; top: -2px; left: 15px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#fb2339" stroke="" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 111.142px; top: 133px; left: -4px; height: 50px; transform-origin: center center; transform: rotate(35deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.1418278451203 50" preserveAspectRatio="none"><defs><marker id="arrow_0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="5" y1="25" x2="106.1418278451203" y2="25" stroke="#ffffff" data-marker="0" stroke-width="10" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="35"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 111.142px; top: 132px; left: 81px; height: 50px; transform-origin: center center; transform: rotate(-35deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.1418278451203 50" preserveAspectRatio="none"><defs><marker id="arrow_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="5" y1="25" x2="106.1418278451203" y2="25" stroke="#ffffff" data-marker="1" stroke-width="10" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-35"></div></div><div class="workspace-preview-layer" data-shape="triangle" style="width: 156px; height: 57px; left: 15px; top: 127px; transform-origin: center center; transform: rotate(180deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="0,100 50,0 100,100" fill="#fb2339" stroke="transparent" stroke-width="0"></polygon></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="180"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 283px; height: 68px; top: 128px; left: 272px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 55px; line-height: 60px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 281px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-3">할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 80px; height: 38px; top: 89px; left: 189px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 25px; line-height: 30px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 78px; min-height: max-content; transform: scaleX(1);">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 30px; top: 160px; left: 189px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 98px; transform: scaleX(1);">정상판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 124px; min-height: max-content; width: 124px; height: auto; top: 14px; left: 31px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 55px; line-height: 60px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: normal; min-height: max-content;" ondblclick="jsEditableText(this)" class="workspace-webfont-1">완전대박</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="wrap" style="width: 374px; height: auto; top: 25px; left: 183px; max-width: 374px; min-height: max-content;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: normal; min-height: max-content;">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="19" onclick="jsSelectTemplate2(this)">
											완전대박_빨간색 (세로형,4×1)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
								<div data-template="14" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="14" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:188.66666666666666px; height:100.0px; zoom: 1;">
											<div class="workspace-preview-layer" data-shape="line" style="width: 171px; top: 26px; left: 9px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 54.375" preserveAspectRatio="none"><defs><marker id="arrow_3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="2" y1="27" x2="169" y2="27" stroke="#00ff00" data-marker="3" stroke-width="3" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 171px; top: -13px; left: 9px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171 54.375" preserveAspectRatio="none"><defs><marker id="arrow_3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="2" y1="27" x2="169" y2="27" stroke="#00ff00" data-marker="3" stroke-width="3" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 173px; height: 35px; top: 18px; left: 9px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(8, 8, 8); font-weight: bold; font-size: 22px; line-height: 27px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 171px; -webkit-text-stroke: 0px rgb(8, 8, 8); min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 126px; height: 56px; top: 54px; left: 31px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(225, 33, 20); font-weight: bold; font-size: 30px; line-height: 38px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 124px; -webkit-text-stroke: 0px rgb(255, 255, 255); min-height: max-content; transform: scaleX(1);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 30px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="14" onclick="jsSelectTemplate2(this)">
											심플_초록색 (세로형,8×3)
										</button>
									</div>
								</div>							
							
								
								
								
									
									
										
										
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="13" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="13" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:400.0px; height:188.66666666666666px; zoom: 0.75;">
											<div class="workspace-preview-layer" data-shape="line" style="width: 199px; top: 142px; left: 194px; height: 48px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 48" preserveAspectRatio="none"><defs><marker id="arrow_0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="15" y1="24" x2="184" y2="24" stroke="#ffff00" data-marker="0" stroke-width="30" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 342px; height: 119px; top: -59px; left: 28px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="50" ry="50" fill="#ffff00" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 196px; height: 67px; top: 118px; left: 193px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(225, 33, 20); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 203px; -webkit-text-stroke: 0px rgb(255, 255, 255); min-height: max-content; transform: scaleX(0.96);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 50px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 378px; height: 60px; top: 24px; left: 11px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(8, 8, 8); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 788px; -webkit-text-stroke: 0px rgb(8, 8, 8); min-height: max-content; transform: scaleX(0.48);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 68px; height: 38px; top: 80px; left: 318px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 22px; line-height: 27px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 73px; min-height: max-content; transform: scaleX(0.9);" class="workspace-webfont-6">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 33px; top: 135px; left: 72px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(143, 143, 143); font-weight: bold; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(143, 143, 143); white-space: nowrap; transform-origin: left top; width: 98px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 20px;">￦</span>정상판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 116px; top: 136px; left: 75px; height: 30px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 30" preserveAspectRatio="none"><defs><marker id="arrow_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="0" y1="15" x2="113" y2="15" stroke="#080808" data-marker="1" stroke-width="3" marker-end="url(#arrow_1)"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.75×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="13" onclick="jsSelectTemplate2(this)">
											심플_노란색 (가로형,3×2)
										</button>
									</div>
								</div>							
							
								
								
								
									
									
										
										
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="8" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="8" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:400.0px; height:188.66666666666666px; zoom: 0.75;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 328px; height: 100px; top: -49px; left: -7px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#2c74e8" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 296px; height: 140px; top: 11px; left: -60px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 140" preserveAspectRatio="none"><ellipse cx="148" cy="70" rx="145.5" ry="67.5" fill="#ffffff" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 296px; height: 140px; top: -44px; left: 202px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 140" preserveAspectRatio="none"><ellipse cx="148" cy="70" rx="145.5" ry="67.5" fill="#2c74e8" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 24px; left: 222px; transform-origin: center center; transform: rotate(15deg);"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 30px; line-height: 35px; font-style: italic; text-align: left; paint-order: stroke; padding: 3px 10px 3px 3px; min-height: max-content;" ondblclick="jsEditableText(this)" class="workspace-webfont-5">Summer!</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="15"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 200px; height: 73px; top: 122px; left: 190px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(6, 71, 172); font-weight: bold; font-size: 50px; line-height: 55px; font-style: italic; text-align: right; paint-order: stroke; padding: 5px 10px; white-space: nowrap; transform-origin: left top; width: 271px; -webkit-text-stroke: 10px rgb(255, 255, 255); min-height: max-content; transform: scaleX(0.73);" class="workspace-webfont-2">할인판매가<span style="display: inline-block; font-size: 35px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 312px; height: 86px; top: 43px; left: 5px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: left; paint-order: stroke; padding: 5px 10px; white-space: nowrap; transform-origin: left top; width: 310px; -webkit-text-stroke: 10px rgb(6, 71, 172); min-height: max-content; transform: scaleX(1);" class="workspace-webfont-3">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 68px; height: 33px; top: 121px; left: 21px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 18px; line-height: 23px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 66px; min-height: max-content; transform: scaleX(1);">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 37px; top: 151px; left: 20px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 20px; line-height: 25px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 107px; min-height: max-content; transform: scaleX(0.92);" class="workspace-webfont-2">정상판매가<span style="display: inline-block; font-size: 15px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.75×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="8" onclick="jsSelectTemplate2(this)">
											여름 할인 상품 (가로형,3×2)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="7" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="7" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:400.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 568px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#002aff" stroke="#002aff" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 505px; height: 83px; top: 132px; left: 35px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 503px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 283px; height: 98px; top: 265px; left: 140px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 70px; line-height: 80px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 354px; min-height: max-content; transform: scaleX(0.79);" class="workspace-webfont-2">할인판매가<span style="display: inline-block; font-size: 45px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 474px; min-height: max-content; width: 474px; height: auto; top: 16px; left: 50px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(0, 42, 255); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: center; paint-order: stroke; padding: 5px 10px; min-height: max-content; -webkit-text-stroke: 10px rgb(255, 255, 255);" ondblclick="jsEditableText(this)" class="workspace-webfont-1">가 격 파 괴</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 80px; height: 43px; top: 207px; left: 444px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 78px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="7" onclick="jsSelectTemplate2(this)">
											가격파괴_파란색 (세로형,2×1)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="6" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="6" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:400.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 568px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#ff0000" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 505px; height: 83px; top: 132px; left: 35px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 503px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 283px; height: 88px; top: 265px; left: 140px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 70px; line-height: 80px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 281px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 70px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 474px; min-height: max-content; width: 474px; height: auto; top: 16px; left: 50px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(240, 0, 0); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: center; paint-order: stroke; padding: 5px 10px; min-height: max-content; -webkit-text-stroke: 10px rgb(255, 255, 255);" ondblclick="jsEditableText(this)" class="workspace-webfont-1">가 격 파 괴</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 80px; height: 43px; top: 207px; left: 444px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 78px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-6">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="6" onclick="jsSelectTemplate2(this)">
											가격파괴_빨간색 (세로형,2×1)
										</button>
									</div>
								</div>							
							
								
								
								
									
									
										
										
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="5" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="5" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:400.0px; height:141.5px; zoom: 0.75;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 402px; height: 143px; top: -1px; left: -1px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 143" preserveAspectRatio="none"><rect width="396" height="137" fill="#ffffff" stroke="#6ef649" stroke-width="6" x="3" y="3"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 146.007px; height: 100px; top: -42px; left: -55px; transform-origin: center center; transform: rotate(-40deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#6ef649" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-40"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 375px; height: 70px; top: 16px; left: 12px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 45px; line-height: 50px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; -webkit-text-stroke: 0px transparent; transform-origin: left top; width: 373px; min-height: max-content; transform: scaleX(1);" class="workspace-webfont-1">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 220px; height: 72px; top: 79px; left: 173px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(0, 128, 0); font-weight: bold; font-size: 50px; line-height: 58px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 284px; -webkit-text-stroke: 0px transparent; min-height: max-content; transform: scaleX(0.77);" class="workspace-webfont-7">할인판매가<span style="display: inline-block; font-size: 40px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 30px; top: 106.5px; left: 90px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 110px; transform: scaleX(0.89);">정상판매가<span style="display:inline-block;font-size:20px">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.75×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="5" onclick="jsSelectTemplate2(this)">
											초록색테마 (가로형,4×2)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="4" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="4" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:200.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="line" style="width: 595px; top: 167px; left: -18px; height: 59px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595 59" preserveAspectRatio="none"><defs><marker id="arrow_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="3" y1="29" x2="592" y2="29" stroke="#fbff00" data-marker="1" stroke-width="5" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="ellipse" style="width: 221px; height: 197px; top: 0px; left: 341px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="50" ry="50" fill="#fbff00" stroke="transparent" stroke-width="0"></ellipse></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="wrap" style="width: 339px; height: 107px; top: 37px; left: -14px; max-width: 339px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 45px; line-height: 50px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: normal; -webkit-text-stroke: 10px transparent;" class="workspace-webfont-3">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 220px; height: 79px; top: 76px; left: 340px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(249, 1, 1); font-weight: bold; font-size: 60px; line-height: 65px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 382px; -webkit-text-stroke: 0px transparent; transform: scaleX(0.57);" class="workspace-webfont-5"><span style="display: inline-block; font-size: 40px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 80px; height: 33px; top: 151px; left: 245px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 78px; transform: scaleX(1);" class="workspace-webfont-1">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 26px; left: 388px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(3, 3, 3); font-weight: bold; font-size: 25px; line-height: 32px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px;" ondblclick="jsEditableText(this)" class="workspace-webfont-3">오늘의 특가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 591px; top: -28px; left: -9px; height: 63px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591 63" preserveAspectRatio="none"><defs><marker id="arrow_0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="3" y1="31" x2="588" y2="31" stroke="#fbff00" data-marker="0" stroke-width="5" stroke-linecap="square"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="4" onclick="jsSelectTemplate2(this)">
											오늘의 특가 (세로형,4×1)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
									
										
										
											
										
									
								
								<div data-template="3" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="3" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:400.0px; zoom: 0.53;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 835.802px; height: 236.36px; top: 84px; left: -140px; transform-origin: center center; transform: rotate(-15deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#fbff00" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-15"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 460px; height: 102.709px; top: 152px; left: 73px; transform-origin: center center; transform: rotate(-15deg);"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 70px; line-height: 75px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 458px; -webkit-text-stroke: 0px transparent; transform: scaleX(1);" class="workspace-webfont-1">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-15"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 283px; height: 96px; top: 293px; left: 266px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 80px; line-height: 85px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 281px; -webkit-text-stroke: 0px transparent; transform: scaleX(1);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 60px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 48px; left: 3px; transform-origin: center center; transform: rotate(-15deg);"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(247, 247, 247);font-weight: bold;font-size: 65px;line-height: 70px;font-style: normal;text-align: left;paint-order: stroke;padding: 10px;-webkit-text-stroke: 20px rgb(255, 0, 0);" ondblclick="jsEditableText(this)" class="workspace-webfont-7">!!타임세일!!</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-15"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 109px; height: 63px; top: 200px; left: 457px; transform-origin: center center; transform: rotate(-15deg);"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 40px; line-height: 45px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 107px; transform: scaleX(1);">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="-15"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 100px; height: 30px; top: 365px; left: 90px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 98px; transform: scaleX(1);"><span style="display:inline-block;font-size:20px">￦</span>정상판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcrate" data-wrap="nowrap" style="width: 85px; height: 30px; top: 365px; left: 5px;"><div class="workspace-preview-layer-content"><div data-goods="dcrate" data-size="20" style="color: rgb(255, 0, 0); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 83px; transform: scaleX(1);">할인율<span style="font-size:20px">%</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.53×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="3" onclick="jsSelectTemplate2(this)">
											타임세일 (세로형,2×1)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
								<div data-template="2" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="2" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:283.0px; height:100.0px; zoom: 1;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 283px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284 100" preserveAspectRatio="none"><rect width="281" height="97" fill="#ffffff" stroke="#f00000" stroke-width="3" x="1.5" y="1.5"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 212px; height: 40px; top: 12px; left: 66px;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(0, 0, 0); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 210px; -webkit-text-stroke: 0px transparent; transform: scaleX(1);" class="workspace-webfont-3">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="nowrap" style="width: 141px; height: 40px; top: 55px; left: 136px;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 5px 10px; white-space: nowrap; transform-origin: left top; width: 139px; -webkit-text-stroke: 10px rgb(255, 255, 255); transform: scaleX(1);" class="workspace-webfont-2"><span style="display: inline-block; font-size: 30px;">￦</span>할인판매가</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 61px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#f00000" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 29px; left: 4px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: normal; font-size: 22px; line-height: 27px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px;" ondblclick="jsEditableText(this)" class="workspace-webfont-5">행사<br>상품</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 3px; left: 17px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: normal; font-size: 20px; line-height: 25px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px;" ondblclick="jsEditableText(this)">★</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div>
										</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="2" onclick="jsSelectTemplate2(this)">
											행사상품 (세로형,8×2)
										</button>
									</div>
								</div>							
							
								
								
								
									
										
										
									
									
								
								
								
									
										
											
										
										
									
								
								<div data-template="1" style="position: relative;">	
									<div class="popup-content-templatebox-frame" data-template="1" onclick="jsSelectTemplate2(this)">
										<div class="popup-content-templatebox-canvas" style="width:566.0px; height:800.0px; zoom: 0.38;">
											<div class="workspace-preview-layer" data-shape="rectangle" style="width: 568px; height: 802px; top: -1px; left: -2px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568 802" preserveAspectRatio="none"><rect width="563" height="797" fill="#ffffff" stroke="#fa0000" stroke-width="5" x="2.5" y="2.5"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 566px; height: 100px; top: 0px; left: 0px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#ff0000" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="name" data-wrap="nowrap" style="width: 491px; height: 93px; top: 176px; left: 47px; min-height: max-content;"><div class="workspace-preview-layer-content"><div data-goods="name" data-size="30" style="color: rgb(51, 51, 51); font-weight: bold; font-size: 80px; line-height: 85px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: nowrap; min-height: max-content; transform-origin: left top; width: 489px; transform: scaleX(1);" class="workspace-webfont-8">상품명</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcprice" data-wrap="wrap" style="width: 500px; height: auto; top: 603px; left: 33px; max-width: 500px; min-height: max-content;"><div class="workspace-preview-layer-content"><div data-goods="dcprice" data-size="30" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 90px; line-height: 95px; font-style: normal; text-align: center; paint-order: stroke; padding: 3px; white-space: normal; min-height: max-content;" class="workspace-webfont-8">가격<span style="display: inline-block; font-size: 60px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="spec" data-wrap="nowrap" style="width: 186px; height: 43px; top: 422px; left: 345px;"><div class="workspace-preview-layer-content"><div data-goods="spec" data-size="15" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 30px; line-height: 35px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 184px; transform: scaleX(1);">규격</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="sprice" data-wrap="nowrap" style="width: 181px; height: 55px; top: 523px; left: 57px;"><div class="workspace-preview-layer-content"><div data-goods="sprice" data-size="20" style="color: rgb(51, 51, 51); font-weight: normal; font-size: 40px; line-height: 45px; font-style: normal; text-align: right; paint-order: stroke; padding: 3px; text-decoration: line-through rgb(51, 51, 51); white-space: nowrap; transform-origin: left top; width: 179px; transform: scaleX(1);">정상가격<span style="display: inline-block; font-size: 20px;">원</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 73px; top: 554px; left: 184px; height: 44px; transform-origin: center center; transform: rotate(137deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 44" preserveAspectRatio="none"><defs><marker id="arrow_1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="0" y1="22" x2="68" y2="22" stroke="#ff0000" data-marker="1" stroke-width="5" marker-end="url(#arrow_1)"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="137"></div></div><div class="workspace-preview-layer" data-shape="line" style="width: 151px; top: 525px; left: 99px; height: 53px;"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 53" preserveAspectRatio="none"><defs><marker id="arrow_0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke"></path></marker></defs><line x1="3" y1="26" x2="199" y2="26" stroke="#ff0000" data-marker="0" stroke-width="5" stroke-linecap="round"></line></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="dcrate" data-wrap="nowrap" style="width: 170px; height: 82px; top: 510px; left: 265px;"><div class="workspace-preview-layer-content"><div data-goods="dcrate" data-size="20" style="color: rgb(255, 0, 0); font-weight: bold; font-size: 70px; line-height: 75px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px; white-space: nowrap; transform-origin: left top; width: 231px; transform: scaleX(0.73);" class="workspace-webfont-2">할인율<span style="font-size: 40px;">%</span></div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="text" data-column="" data-wrap="wrap" style="max-width: 100%; min-height: max-content; width: max-content; height: auto; top: 18px; left: 152px;"><div class="workspace-preview-layer-content"><div data-goods="etc" data-size="30" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 50px; line-height: 55px; font-style: normal; text-align: left; paint-order: stroke; padding: 3px;" ondblclick="jsEditableText(this)" class="workspace-webfont-5">이번주 특가!</div></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="0"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 30px; height: 30px; top: 33px; left: 102px; transform-origin: center center; transform: rotate(45deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#fcfcfc" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="45"></div></div><div class="workspace-preview-layer" data-shape="rectangle" style="width: 30px; height: 30px; top: 34px; left: 453px; transform-origin: center center; transform: rotate(45deg);"><div class="workspace-preview-layer-content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><rect width="100" height="100" fill="#fcfcfc" stroke="transparent" stroke-width="0"></rect></svg></div><div class="workspace-preview-layer-handle h-w" data-dir="w"></div><div class="workspace-preview-layer-handle h-s" data-dir="s"></div><div class="workspace-preview-layer-handle h-e" data-dir="e"></div><div class="workspace-preview-layer-handle h-nw" data-dir="nw"></div><div class="workspace-preview-layer-handle h-sw" data-dir="sw"></div><div class="workspace-preview-layer-handle h-ne" data-dir="ne"></div><div class="workspace-preview-layer-handle h-se" data-dir="se"></div><div class="workspace-preview-layer-rotate" data-dir="rotate" data-angle="45"></div></div>
										</div>
										
											<div style="position:absolute; top: 3px; left: 3px; font-size: 12px;">0.38×</div>
										
										
									</div>
									<div class="popup-content-buttons" style="margin-top: 3px; height: 26px;">
										<button type="button" class="popup-content-templatebox-btn" data-template="1" onclick="jsSelectTemplate2(this)">
											이번주 특가 (세로형,1×1)
										</button>
									</div>
								</div>							
							
						
						
					
				</div>
			</div>
			<!-- 레이어4 -->
			<div id="pricecardFontBox" class="popup-content-group hidden" style="max-height: 800px;">
				<button type="button" class="popup-close-btn" onclick="jsCloseLayer()"></button>
				<div class="popup-content-title">글꼴 미리보기</div>
				<div class="popup-content-text">
					30px | 25px, 굵게 | 20px, 취소선 | 20px | 20px				
				</div>
				<div class="popup-content-fontbox">
					<div style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px;">프리텐다드</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-1" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px;">G마켓산스</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-2" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">페이퍼로지</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-3" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">학교안심둥근미소</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-4" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">경기천년제목체</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-5" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">가나초콜릿체</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-6" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">세방고딕</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-7" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">푸라닭젠틀고딕</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-8" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">넥센타이어</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-9" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">KBIZ한마음명조체</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
					<div class="workspace-webfont-10" style="padding: 10px;" onclick="jsSelectFont(this)">
						<div style="font-size:30px; font-weight">김포평화바탕</div>
						<div style="font-size:25px; font-weight: bold">이번 주 특가 할인</div>
						<div style="font-size:20px; text-decoration:line-through">지난주 특가 할인</div>
						<div style="font-size:20px">1,234,567,890</div>
						<div style="font-size:20px">BIG SALE! big sale!</div>
					</div>
				</div>
			</div>
		</div>
	</div>