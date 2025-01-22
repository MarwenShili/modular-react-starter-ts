import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  mode: string
  collapseSidebar: boolean
  navSize: string
  navColor: string
  presetsConfig: {
    presets: string[]
    selectedPreset: string
  }
  autoWidth: boolean
}

const initialState: ThemeState = {
  mode: 'light',
  collapseSidebar: true,
  navSize: 'large',
  navColor: '#ffffff',
  presetsConfig: {
    presets: ['#0088F7', '#00A76F', '#F7931E', '#FF4D4F', '#7A1FA2', '#000000'],
    selectedPreset: '#0088F7',
  },
  autoWidth: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setPresets: (state, action) => {
      state.presetsConfig.selectedPreset = action.payload
    },
    setCollapseSidebar: (state, action) => {
      state.collapseSidebar = action.payload
    },
    setNavSize: (state, action) => {
      state.navSize = action.payload
    },
    setNavColor: (state, action) => {
      state.navColor = action.payload
    },
    setAutoWidth: (state, action) => {
      state.autoWidth = action.payload
    },
    resetTheme: (state) => {
      state.mode = initialState.mode
      state.collapseSidebar = initialState.collapseSidebar
      state.navSize = initialState.navSize
      state.navColor = initialState.navColor
      state.presetsConfig = initialState.presetsConfig
      state.autoWidth = initialState.autoWidth
    },
  },
})

export default themeSlice.reducer

export const {
  toggleTheme,
  setPresets,
  setCollapseSidebar,
  setNavSize,
  setNavColor,
  setAutoWidth,
  resetTheme,
} = themeSlice.actions
