import { Button } from '@mui/material'

import { useQuestionsStore } from '../store/questions'

const LIMIT_QUESTIONS = 10

const StartButton = (): JSX.Element => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)

  const handleClick = (): void => {
    void fetchQuestions(LIMIT_QUESTIONS)
  }

  return (
    <Button sx={{ margin: 'auto' }} onClick={handleClick} variant="contained">
      Start quiz!
    </Button>
  )
}

export default StartButton
