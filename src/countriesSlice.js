import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [],
  countryDetails: [],
  borderCountries: [],
  error: [],
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

    setBorderCountries: (state, action) => {
      state.borderCountries = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setCountries, setCountryDetails, setBorderCountries, setError } =
  CountriesSlice.actions
export default CountriesSlice.reducer
