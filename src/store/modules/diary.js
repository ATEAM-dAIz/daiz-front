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
    case "PREPEND_DATE":
      return {
        ...state,
        date: [action.payload.date],
      };
    case "INSERT_DATE":
      state.date.map((val) => {
        return (
          val !== action.payload.date && {
            ...state, //copying the original state
            date: [...state.date, action.payload], //new todos array
          }
        );
      });

    default:
      return state;
  }
}
