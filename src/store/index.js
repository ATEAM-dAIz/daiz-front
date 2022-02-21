import { combineReducers } from "redux";
import { createStore } from "redux";

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./modules/info";

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
