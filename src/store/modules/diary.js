// 액션 타입
const ADD_DATE = "info/ADD_DATE";

// 액션 생성 함수
export const addDate = () => ({ type: ADD_DATE });

// 모듈 초기 상태
const initialState = {
  date: "",
};

// 리듀서
export default function diaryReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_DATE":
      console.log(state);
      return {
        ...state,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
