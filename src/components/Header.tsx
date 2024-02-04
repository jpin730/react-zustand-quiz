import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { JavaScriptLogo } from './JavaScriptLogo'
import ThemeButton from './ThemeButton'

function Header(): JSX.Element {
  const theme = useTheme()
  const medium = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            <JavaScriptLogo />
            <Typography variant={medium ? 'h4' : 'h5'} component="h1">
              JavaScript Quiz
            </Typography>
          </Stack>
          <Box flexGrow={1} />
          <ThemeButton />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
