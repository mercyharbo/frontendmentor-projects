const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  selectedPhotoDetails: [],
  selectedImg: null,
  isModalOpen: false,
  isLoading: true,
  isFailure: false,
  photos: [],
  heroPhoto: null,
  errorMessage: null,
  categoryParams: 'editorial',
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
    setIsFailure: (state, action) => {
      state.isFailure = action.payload
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
    setPhotos: (state, action) => {
      state.photos = action.payload
    },
    setHeroPhoto: (state, action) => {
      state.heroPhoto = action.payload
    },
    setCategoryParams: (state, action) => {
      state.categoryParams = action.payload
    },
  },
})

export const {
  setSelectedPhotosDetails,
  setSelectedImg,
  setIsModalOpen,
  setIsLoading,
  setHeroPhoto,
  setPhotos,
  setErrorMessage,
  setIsFailure,
  setCategoryParams,
} = photosSlice.actions
export default photosSlice.reducer
