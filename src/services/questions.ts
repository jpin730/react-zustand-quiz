import { type Question } from '../interfaces/Question'

const API_URL = ''
const LIMIT_QUESTIONS = 10

export const getQuestions = async (): Promise<Question[]> => {
  const res = await fetch(`${API_URL}/data.json`)
  const json = await res.json()
  return json
    .sort(() => Math.random() - 0.5)
    .slice(0, LIMIT_QUESTIONS) as Question[]
}