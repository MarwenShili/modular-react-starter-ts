import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Modal {
  id: string
  open: boolean
  data?: any
}

interface ModalsState {
  modals: Modal[]
}

const initialState: ModalsState = {
  modals: [
    // Your initial modals here
    {
      id: 'modal-example',
      open: false,
    },
    {
      id: 'drawer-example',
      open: false,
    },
    {
      id: 'theme-settings',
      open: false,
    },
    {
      id: 'user-profile',
      open: false,
    },
  ],
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ id: string; data?: any }>) => {
      const { id, data } = action.payload
      const index = state.modals.findIndex((modal) => modal.id === id)
      if (index !== -1) {
        state.modals[index].open = true
        state.modals[index].data = data
      }
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const index = state.modals.findIndex((modal) => modal.id === id)

      if (index !== -1) {
        state.modals[index].open = false
      }
    },
    closeAllModals: (state) => {
      state.modals.forEach((modal) => {
        modal.open = false
      })
    },
  },
})

export const { openModal, closeModal, closeAllModals } = modalsSlice.actions

export default modalsSlice.reducer
