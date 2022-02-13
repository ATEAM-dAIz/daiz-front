import { combineReducers } from "redux";
import { createStore } from "redux";

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// actionTypes
// export const LOGIN_USER = "info/LOGIN_USER";
// export const LOGOUT_USER = "info/LOGOUT_USER";

// actions
// const loginAction = (userData) => {
//   return {
//     type: LOGIN_USER,
//     userData,
//     isLoggedIn: true,
//   };
// };

// const logoutAction = () => {
//   return {
//     type: LOGOUT_USER,
//     userData: {},
//     isLoggedIn: false,
//   };
// };

// reducer
const initialState = {
  email: "",
  refresh_token: "",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
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

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["userReducer"],
};

const rootReducer = combineReducers({ userReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
