// 액션 타입
const CLICK_MAIN = "tab_bar/CLICK_MAIN";
const CLICK_WRITING = "tab_bar/CLICK_WRITING";
const CLICK_MYPAGE = "tab_bar/CLICK_MYPAGE";

// 액션 생성 함수
export const clickMain = (main) => ({ type: CLICK_MAIN, main });
export const clickWriting = (writing) => ({
  type: CLICK_WRITING,
  writing,
});
export const clickMypage = (mypage) => ({ type: CLICK_MYPAGE, mypage });

// 모듈 초기 상태
const initialState = {
  main: "",
  writing: "",
  mypage: "",
};

// 리듀서
export default function tabBarReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_MAIN:
      return {
        main: action.main,
        writing: action.writing,
        mypage: action.mypage,
      };
    case CLICK_WRITING:
      return {
        main: action.main,
        writing: action.writing,
        mypage: action.mypage,
      };
    case CLICK_MYPAGE:
      return {
        main: action.main,
        writing: action.writing,
        mypage: action.mypage,
      };

    default:
      return state;
  }
}
