// 액션 타입
const INSERT_DATE = "diary/INSERT_DATE" as const;

// 액션 생성 함수
export const insertDate = (dateArray: Array<any>) => ({
  type: INSERT_DATE,
  dateArray,
});

type DiaryState = { date: Array<any> };

// 모듈 초기 상태
const initialState: DiaryState = { date: [] };

type DiaryAction = ReturnType<typeof insertDate>;

// 리듀서
export default function diaryReducer(
  state: DiaryState = initialState,
  action: DiaryAction
): DiaryState {
  switch (action.type) {
    case INSERT_DATE:
      state.date = state.date.concat(action.dateArray);
      return state;

    default:
      return state;
  }
}
