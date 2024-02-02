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
    const storedColorMode = localStorage.getItem('colorMode')

    if (
      storedColorMode != null &&
      (storedColorMode === 'dark' || storedColorMode === 'light')
    ) {
      setColorMode(storedColorMode)
      return
    }

    setColorMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode, setColorMode])

  const handleClick = (): void => {
    const selectedColorMode = colorMode === 'dark' ? 'light' : 'dark'
    setColorMode(selectedColorMode)
    localStorage.setItem('colorMode', selectedColorMode)
  }

  return (
    <IconButton onClick={handleClick} color="inherit">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}

export default ThemeButton
