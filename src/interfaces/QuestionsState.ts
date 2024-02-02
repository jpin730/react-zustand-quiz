import { type Question } from './Question'

export interface QuestionsState {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
}
