// 액션 타입
const CLICK_MAIN = "tab_bar/CLICK_MAIN" as const;
const CLICK_WRITING = "tab_bar/CLICK_WRITING" as const;
const CLICK_MYPAGE = "tab_bar/CLICK_MYPAGE" as const;

// 액션 생성 함수
export const clickMain = () => ({
  type: CLICK_MAIN,
});
export const clickWriting = () => ({
  type: CLICK_WRITING,
});
export const clickMypage = () => ({
  type: CLICK_MYPAGE,
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
  console.log(state);
  switch (action.type) {
    case CLICK_MAIN:
      return {
        main: "true",
        writing: "false",
        mypage: "false",
      };
    case CLICK_WRITING:
      return {
        main: "false",
        writing: "true",
        mypage: "false",
      };
    case CLICK_MYPAGE:
      return {
        main: "false",
        writing: "false",
        mypage: "true",
      };

    default:
      return state;
  }
}
