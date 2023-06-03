import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import usersSlice from "./usersSlice";
import { filtersReducer } from "./filtersSlice";

const authPersistConfig = {
  key: "following",
  storage,
  whitelist: ["isFollowing"],
};

export const store = configureStore({
  reducer: {
    tweets: persistReducer(authPersistConfig, usersSlice),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
