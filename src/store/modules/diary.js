// 액션 타입
const INSERT_DATE = "diary/INSERT_DATE";

// 액션 생성 함수
export const addDate = () => ({ type: INSERT_DATE });

// 모듈 초기 상태
const initialState = {
  date: [],
};

// 리듀서
export default function diaryReducer(state = initialState, action) {
  switch (action.type) {
    case "INSERT_DATE":
      return {
        date: [...state.date, ...action.payload.date],
      };

    default:
      return state;
  }
}
