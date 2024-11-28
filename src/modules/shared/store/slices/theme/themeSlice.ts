import { createSlice } from '@reduxjs/toolkit'

const getTheme = () => {
  return localStorage?.getItem('theme') || 'light'
}

interface ThemeState {
  mode: string
  collapseSidebar: boolean
  presetsConfig: {
    presets: string[]
    selectedPreset: string
  }
}

const initialState: ThemeState = {
  mode: getTheme(),
  collapseSidebar: false,
  presetsConfig: {
    presets: ['#0088F7', '#00A76F', '#F7931E', '#FF4D4F', '#7A1FA2', '#000000'],
    selectedPreset: '#0088F7',
  },
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem('theme', state.mode === 'light' ? 'dark' : 'light')
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setPresets: (state, action) => {
      state.presetsConfig.selectedPreset = action.payload
    },
    setCollapseSidebar: (state, action) => {
      state.collapseSidebar = action.payload
    },
  },
})

export default themeSlice.reducer

export const { toggleTheme, setPresets, setCollapseSidebar } = themeSlice.actions
