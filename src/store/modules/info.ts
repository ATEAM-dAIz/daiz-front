// 액션 타입
const LOGIN_USER = "info/LOGIN_USER" as const;
const LOGOUT_USER = "info/LOGOUT_USER" as const;

// 액션 생성 함수
export const login = (
  email: string,
  refresh_token: string,
  username: string,
  isLoggedIn: boolean
) => ({
  type: LOGIN_USER,
  info: {
    email: email,
    refresh_token: refresh_token,
    username: username,
    isLoggedIn: isLoggedIn,
  },
});
export const logout = (
  email: string,
  refresh_token: string,
  username: string,
  isLoggedIn: boolean
) => ({
  type: LOGOUT_USER,
  info: {
    email: email,
    refresh_token: refresh_token,
    username: username,
    isLoggedIn: isLoggedIn,
  },
});

type InfoState = {
  email: string;
  refresh_token: string;
  username: string;
  isLoggedIn: boolean;
};

// 모듈 초기 상태
const initialState = {
  email: "",
  refresh_token: "",
  username: "",
  isLoggedIn: false,
};

type InfoAction = ReturnType<typeof login> | ReturnType<typeof logout>;

// 리듀서
export default function userReducer(
  state: InfoState = initialState,
  action: InfoAction
): InfoState {
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
