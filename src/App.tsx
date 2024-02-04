import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'

import { useColorModeStore } from './store/colorMode'
import { useQuestionsStore } from './store/questions'
import StartButton from './components/StartButton'
import Header from './components/Header'
import Game from './components/Game'

function App(): JSX.Element {
  const colorMode = useColorModeStore((state) => state.colorMode)
  const questions = useQuestionsStore((state) => state.questions)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <main>
        {questions.length === 0 && <StartButton />}
        {questions.length > 0 && <Game />}
      </main>
    </ThemeProvider>
  )
}

export default App
