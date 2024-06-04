import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './slices/theme/themeSlice'
import authReducer from '../../auth/data/authSlice'
import bookReducer from '../../book/data/bookSlice'
import modalReducer from './slices/modal/modalSlice'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  book: bookReducer,
  modal: modalReducer,
})

export default rootReducer
