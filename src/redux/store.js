import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./usersSlice";

export const store = configureStore({
  reducer: {
    tweets: usersSlice.reducer,
    filter: null,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          "payload.headers",
          "payload.config",
          "payload.request",
        ],
      },
    }),
});
