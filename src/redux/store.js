import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer } from "./tasksSlice";
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
import { filtersReducer } from "./filtersSlice";
import { showFiltersReducer } from "./showFiltersSlice";
import { showModalReducer } from "./showModalSlice";
import { showHeroReducer } from "./showHeroSlice";
import { showRegisterReducer } from "./showRegisterSlice";
import { authReducer } from "./auth/slice";
import { winesReducer } from "./wines/slice";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    wines: winesReducer,
    filters: filtersReducer,
    showFilters: showFiltersReducer,
    showModal: showModalReducer,
    showHero: showHeroReducer,
    showRegister: showRegisterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
