import { configureStore } from '@reduxjs/toolkit'

// Import your reducers here
import searchSlice from './searchSlice'
import photosSlice from './photosSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice,
    photosSlice: photosSlice
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
})

export default store
