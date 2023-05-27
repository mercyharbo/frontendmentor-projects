const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  searchInput: '',
  searchResults: [],
  totalPages: 0,
  loading: true,
  failed: null,
}

const searchSlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setFailed: (state, action) => {
      state.failed = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
  },
})

export const {
  setSearchInput,
  setSearchResults,
  setFailed,
  setLoading,
  setTotalPages,
} = searchSlice.actions
export default searchSlice.reducer
