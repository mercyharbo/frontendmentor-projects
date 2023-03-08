import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [],
  countryDetails: [],
  error: [],
  darkMode: false,
}

const CountriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload
    },
    setCountryDetails: (state, action) => {
      state.countryDetails = action.payload
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setCountries, setCountryDetails, setDarkMode, setError } =
  CountriesSlice.actions
export default CountriesSlice.reducer
