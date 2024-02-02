import { create } from 'zustand'

import { type ColorModeState } from '../interfaces/ColorModeState'

export const useColorModeStore = create<ColorModeState>((set) => {
  return {
    colorMode: 'light',
    setColorMode: (colorMode) => {
      set({ colorMode })
    },
  }
})
