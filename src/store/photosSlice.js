const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  selectedPhotoDetails: [],
  selectedImg: null,
}

const photosSlice = createSlice({
  name: 'photosRedicer',
  initialState,
  reducers: {
    setSelectedPhotosDetails: (state, action) => {
      state.selectedPhotoDetails = action.payload
      },
      setSelectedImg: (state, action) => {
          state.selectedImg = action.payload
      }
  },
})

export const { setSelectedPhotosDetails, setSelectedImg } = photosSlice.actions
export default photosSlice.reducer
