import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import dashboardSlice from '../service/dashboardSlice'

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
})

setupListeners(store.dispatch)