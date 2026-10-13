import '../ai_button.css';

export default function UiView() {
    return (
        <div className="flex flex-col gap-2 my-4 mx-4">
          <div className="flex gap-2">
            <button className="c-btn">기본버튼</button>
            <button className="c-btn selected">선택된 버튼</button>
            <button className="c-btn selected">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>
            <button className="c-btn disabled">비활성 버튼</button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-primary">Primary 버튼</button>
            <button className="c-btn-primary selected">Primary 선택된 버튼</button>
            <button className="c-btn-primary selected">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-primary disabled">Primary 비활성 버튼</button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-secondary">Secondary 버튼</button>
            <button className="c-btn-secondary selected">Secondary 선택된 버튼</button>
            <button className="c-btn-secondary selected">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-secondary disabled">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              Secondary 비활성 버튼
            </button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-tertiary">Tertiary 버튼</button>
            <button className="c-btn-tertiary selected">Tertiary 선택된 버튼</button>
            <button className="c-btn-tertiary selected">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z"></path></svg>
              아이콘
            </button>

            <button className="c-btn-tertiary disabled">Tertiary 비활성 버튼</button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v1H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
          <div className="flex gap-2">
            <button className="c-btn c-btn-primary c-btn-lg">Large Primary Button</button>
            <button className="c-btn c-btn-secondary c-btn-lg">Large Secondary Button</button>
            <button className="c-btn c-btn-icon c-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v1H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
        </div>
    );
}