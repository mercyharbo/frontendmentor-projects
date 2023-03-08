import { configureStore } from '@reduxjs/toolkit'

import CountriesSlice from './slices/getCountries'

export default configureStore({
  reducer: {
    countriesData: CountriesSlice,
  },
  devTools: true,
})
