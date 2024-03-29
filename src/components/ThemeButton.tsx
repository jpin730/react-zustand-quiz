import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useEffect } from 'react'

import { useColorModeStore } from '../store/colorMode'

function ThemeButton(): JSX.Element {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useTheme()
  const colorMode = useColorModeStore((state) => state.colorMode)
  const setColorMode = useColorModeStore((state) => state.setColorMode)

  useEffect(() => {
    if (colorMode == null) {
      setColorMode(prefersDarkMode ? 'dark' : 'light')
    }
  }, [colorMode, prefersDarkMode, setColorMode])

  const toggleTheme = (): void => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <IconButton onClick={toggleTheme} color="inherit" size="large">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ThemeButton
