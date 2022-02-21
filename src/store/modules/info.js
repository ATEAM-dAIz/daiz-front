// 액션 타입
const LOGIN_USER = "info/LOGIN_USER";
const LOGOUT_USER = "info/LOGOUT_USER";

// 액션 생성 함수
export const login = () => ({ type: LOGIN_USER });
export const logout = () => ({ type: LOGOUT_USER });

// 모듈 초기 상태
const initialState = {
  email: "",
  refresh_token: "",
  isLoggedIn: false,
};

// 리듀서
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(state);
      return {
        ...state,
        email: action.payload.email,
        refresh_token: action.payload.refresh_token,
        isLoggedIn: action.payload.isLoggedIn,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        email: action.payload.email,
        refresh_token: action.payload.refresh_token,
        isLoggedIn: action.payload.isLoggedIn,
      };

    default:
      return state;
  }
}
