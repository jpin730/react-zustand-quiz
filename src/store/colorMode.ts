import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type ColorModeState } from '../interfaces/ColorModeState'

export const useColorModeStore = create<ColorModeState>()(
  persist(
    (set) => {
      return {
        setColorMode: (colorMode) => {
          set({ colorMode })
        },
      }
    },
    {
      name: 'color-mode',
    },
  ),
)
