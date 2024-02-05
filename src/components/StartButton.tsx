import { Button } from '@mui/material'

import { useQuestionsStore } from '../store/questions'

const LIMIT_QUESTIONS = 10

const StartButton = (): JSX.Element => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)

  const handleClick = (): void => {
    void fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button
      size="large"
      variant="contained"
      sx={{ margin: 'auto' }}
      onClick={handleClick}
    >
      Start quiz!
    </Button>
  )
}

export default StartButton
