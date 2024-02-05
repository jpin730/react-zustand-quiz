import { type Question } from './Question'

export interface QuestionsState {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: () => Promise<void>
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  selectAnswer: (questionId: number, answerIndex: number) => void
  reset: () => void
}
