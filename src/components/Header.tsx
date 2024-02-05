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
import ResetButton from './ResetButton'

function Header(): JSX.Element {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.up('sm'))

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
            <Typography variant={small ? 'h4' : 'h5'} component="h1">
              {small ? 'JavaScript' : 'JS'} Quiz
            </Typography>
          </Stack>
          <Box flexGrow={1} />
          <Stack direction="row">
            <ResetButton />
            <ThemeButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
