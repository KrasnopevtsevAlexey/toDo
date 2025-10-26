import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../modules/theme'
import { themes } from '../styles/themes'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: themes['light'],
}

export const themeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
     state.theme = state.theme.name === 'light' ? themes['darck'] : themes['light'];
    },
  },
})

export const { toggleThemeAction } = themeSlice.actions
export default themeSlice.reducer