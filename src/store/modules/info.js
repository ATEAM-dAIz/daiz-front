// 액션 타입
const LOGIN_USER = "info/LOGIN_USER";
const LOGOUT_USER = "info/LOGOUT_USER";

// 액션 생성 함수
export const login = (email, refresh_token, username, isLoggedIn) => ({
  type: LOGIN_USER,
  info: {
    email: email,
    refresh_token: refresh_token,
    username: username,
    isLoggedIn: isLoggedIn,
  },
});
export const logout = (email, refresh_token, username, isLoggedIn) => ({
  type: LOGOUT_USER,
  info: {
    email: email,
    refresh_token: refresh_token,
    username: username,
    isLoggedIn: isLoggedIn,
  },
});

// 모듈 초기 상태
const initialState = {
  email: "",
  refresh_token: "",
  username: "",
  isLoggedIn: false,
};

// 리듀서
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        email: action.info.email,
        refresh_token: action.info.refresh_token,
        username: action.info.username,
        isLoggedIn: action.info.isLoggedIn,
      };

    case LOGOUT_USER:
      return {
        ...state,
        email: "",
        refresh_token: "",
        username: "",
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
