import { createSlice } from '@reduxjs/toolkit'
import { NotificationExample } from './notificationTypes'

const notifications = [
  {
    id: 1,
    content: 'The upload of your snapshot was completed successfully.',
    isNotificationRead: false,
    isArchived: false,
  },

  {
    id: 3,
    content: 'The upload of your snapshot was completed successfully.',
    isNotificationRead: false,
    isArchived: false,
  },
  {
    id: 2,
    content: 'The upload of your snapshot was completed successfully.',
    isNotificationRead: true,
    isArchived: false,
  },
]

interface NotificationState {
  notifications: NotificationExample[]
}

const initialState: NotificationState = {
  notifications,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    readNotification: (state, action) => {
      const updatedNotifications = state.notifications.map((el) =>
        el.id === action.payload ? { ...el, isNotificationRead: true } : el,
      )
      state.notifications = updatedNotifications
    },
    readAllNotifications: (state) => {
      state.notifications = state.notifications.map((el) => ({
        ...el,
        isNotificationRead: true,
      }))
    },
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload)
    },
  },
})

export const { readNotification, readAllNotifications, addNotification } = notificationSlice.actions
export default notificationSlice.reducer
