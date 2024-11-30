import { combineReducers } from '@reduxjs/toolkit'
import themeReducer from './slices/theme/themeSlice'
import notificationReducer from "../../notification/data/notificationSlice"
import authReducer from '../../auth/data/authSlice'
import modalReducer from './slices/modal/modalSlice'

const rootReducer = combineReducers({
  notification: notificationReducer,
  theme: themeReducer,
  auth: authReducer,
  modal: modalReducer,
})

export default rootReducer
