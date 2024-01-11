import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import postSlice from "./slices/postSlice";

const combinedReducer = combineReducers({
  auth: authSlice,
  post: postSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout/fulfilled") {
    return (state = undefined);
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
