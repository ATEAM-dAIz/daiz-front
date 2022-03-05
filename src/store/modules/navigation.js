// 액션 타입
const CLICK_MAIN = "navigation/CLICK_MAIN";
const CLICK_WRITING = "navigation/CLICK_WRITING";
const CLICK_MYPAGE = "navigation/CLICK_MYPAGE";

// 액션 생성 함수
export const clickMain = () => ({ type: CLICK_MAIN });
export const clickWriting = () => ({ type: CLICK_WRITING });
export const clickMypage = () => ({ type: CLICK_MYPAGE });

// 모듈 초기 상태
const initialState = {
  main: "",
  writing: "",
  mypage: "",
};

// 리듀서
export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case "CLICK_MAIN":
      return {
        main: action.payload.main,
        writing: action.payload.writing,
        mypage: action.payload.mypage,
      };
    case "CLICK_WRITING":
      return {
        main: action.payload.main,
        writing: action.payload.writing,
        mypage: action.payload.mypage,
      };
    case "CLICK_MYPAGE":
      return {
        main: action.payload.main,
        writing: action.payload.writing,
        mypage: action.payload.mypage,
      };

    default:
      return state;
  }
}
