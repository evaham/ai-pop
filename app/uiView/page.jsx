import '../ai_button.css';

export default function UiView() {
    return (
        <div className="flex flex-col gap-2 my-4 mx-4">
          <div className="flex gap-2">
            <button className="c-btn w-30">기본버튼</button>
            <button className="c-btn w-30 selected">선택된 버튼</button>
            <button className="c-btn w-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>
            <button className="c-btn w-30 disabled">비활성 버튼</button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-primary w-30">Primary 버튼</button>
            <button className="c-btn-primary w-30 selected">선택된 버튼</button>
            <button className="c-btn-primary w-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-primary w-30 disabled">비활성 버튼</button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-secondary w-30">Secondary 버튼</button>
            <button className="c-btn-secondary w-30 selected">선택된 버튼</button>
            <button className="c-btn-secondary w-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-secondary w-30 disabled">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              비활성 버튼
            </button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-tertiary w-30">Tertiary 버튼</button>
            <button className="c-btn-tertiary w-30 selected">선택된 버튼</button>
            <button className="c-btn-tertiary w-30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-tertiary w-30 disabled">비활성 버튼</button>
          </div>
          <div className="flex flex-col gap-2">
             <input type="text" className="c-input w-30" placeholder="입력폼" />
             <textarea className="c-textarea w-30" placeholder="텍스트 영역"></textarea>
             <select className="c-select w-30">
               <option>선택 옵션 1</option>
               <option>선택 옵션 2</option>
               <option>선택 옵션 3</option>
             </select>
          </div>
        </div>
    );
}