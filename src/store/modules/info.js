const initialState = {
  email: "",
  refresh_token: "",
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
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
};
