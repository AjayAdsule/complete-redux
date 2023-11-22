import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../app/services/post";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  },
});

export default store;
