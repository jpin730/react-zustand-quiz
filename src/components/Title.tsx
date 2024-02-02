import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

import { JavaScriptLogo } from './JavaScriptLogo'
import ThemeButton from './ThemeButton'

function Title(): JSX.Element {
  const theme = useTheme()
  const medium = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
      <JavaScriptLogo />

      <Typography variant={medium ? 'h4' : 'h5'} component="h1">
        JavaScript Quiz
      </Typography>

      <ThemeButton />
    </Stack>
  )
}

export default Title
