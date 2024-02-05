import { useQuestionsStore } from '../store/questions'

interface QuestionsData {
  correct: number
  incorrect: number
  unanswered: number
}

export const useQuestionsData = (): QuestionsData => {
  const questions = useQuestionsStore((state) => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach((question) => {
    const { selectedAnswer, correctAnswer } = question
    if (selectedAnswer == null) unanswered++
    else if (selectedAnswer === correctAnswer) correct++
    else incorrect++
  })

  return { correct, incorrect, unanswered }
}
