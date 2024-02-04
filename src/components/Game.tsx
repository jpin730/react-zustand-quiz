import { Container } from '@mui/material'

import { useQuestionsStore } from '../store/questions'
import GameNavigation from './GameNavigation'
import QuestionCard from './QuestionCard'

function Game(): JSX.Element {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
    >
      <QuestionCard info={questionInfo} />

      <GameNavigation />
    </Container>
  )
}

export default Game
