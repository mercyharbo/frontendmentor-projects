import { configureStore } from '@reduxjs/toolkit'

// Import your reducers here
import searchSlice from './searchSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
})

export default store
