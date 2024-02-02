import { Container } from '@mui/material'

import { useQuestionsStore } from './store/questions'
import StartButton from './components/StartButton'
import Title from './components/Title'

function App(): JSX.Element {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth="sm">
        <Title />

        {questions.length === 0 && <StartButton />}
        {questions.length > 0 && (
          <ul>
            {questions.map((q) => (
              <li key={q.id}>{q.question}</li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  )
}

export default App
