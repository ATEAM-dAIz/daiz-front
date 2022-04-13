// 액션 타입
const CLICK_MAIN = "tab_bar/CLICK_MAIN" as const;
const CLICK_WRITING = "tab_bar/CLICK_WRITING" as const;
const CLICK_MYPAGE = "tab_bar/CLICK_MYPAGE" as const;

// 액션 생성 함수
export const clickMain = (main: string, writing: string, mypage: string) => ({
  type: CLICK_MAIN,
  main: main,
  writing: writing,
  mypage: mypage,
});
export const clickWriting = (
  main: string,
  writing: string,
  mypage: string
) => ({
  type: CLICK_WRITING,
  main: main,
  writing: writing,
  mypage: mypage,
});
export const clickMypage = (main: string, writing: string, mypage: string) => ({
  type: CLICK_MYPAGE,
  main: main,
  writing: writing,
  mypage: mypage,
});

type TabBarState = {
  main: string;
  writing: string;
  mypage: string;
};

// 모듈 초기 상태
const initialState = {
  main: "",
  writing: "",
  mypage: "",
};

type TabBarAction =
  | ReturnType<typeof clickMain>
  | ReturnType<typeof clickWriting>
  | ReturnType<typeof clickMypage>;

// 리듀서
export default function tabBarReducer(
  state: TabBarState = initialState,
  action: TabBarAction
): TabBarState {
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
