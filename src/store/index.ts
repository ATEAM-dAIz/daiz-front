import { combineReducers } from "redux";
import { createStore } from "redux";

import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./modules/info";
import diaryReducer from "./modules/diary";
import tabBarReducer from "./modules/tab_bar";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use useAppDispatch, useAppSelector instead of plain 'useDispatch' and 'useSelector'
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["diaryReducer"],
};

const rootReducer = combineReducers({
  userReducer,
  diaryReducer,
  tabBarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
