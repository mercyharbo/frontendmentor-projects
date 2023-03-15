import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './countriesSlice'

export default configureStore({
  reducer: {
    countriesData: countriesSlice,
  },
  devTools: true,
})
