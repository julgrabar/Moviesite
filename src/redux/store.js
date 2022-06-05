import { configureStore } from "@reduxjs/toolkit"
import {  authSlice, persistedReducer } from "./auth/authSlice"
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
    reducer:{
        [authSlice.name]: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  },
)

export const persistor = persistStore(store)