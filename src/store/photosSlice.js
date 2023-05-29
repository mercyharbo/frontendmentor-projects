const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  selectedPhotoDetails: [],
  selectedImg: null,
  isModalOpen: false,
  isLoading: true,
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
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setSelectedPhotosDetails, setSelectedImg, setIsModalOpen, setIsLoading } =
  photosSlice.actions
export default photosSlice.reducer
