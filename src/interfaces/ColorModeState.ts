import { type ColorMode } from './ColorMode'

export interface ColorModeState {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
}
