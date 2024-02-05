import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { IconButton, Stack } from '@mui/material'

import { useQuestionsStore } from '../store/questions'

function GameNavigation(): JSX.Element {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion,
  )
  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      justifyContent="center"
      paddingY={2}
    >
      <IconButton
        onClick={goPreviousQuestion}
        disabled={currentQuestion === 0}
        size="large"
      >
        <ArrowBackIosNew />
      </IconButton>
      {currentQuestion + 1} / {questions.length}
      <IconButton
        onClick={goNextQuestion}
        disabled={currentQuestion >= questions.length - 1}
        size="large"
      >
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  )
}

export default GameNavigation
