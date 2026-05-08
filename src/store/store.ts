import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './apis/baseApi'
import uiReducer from './slices/uiSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore['dispatch']
