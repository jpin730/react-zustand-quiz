import { type Question } from '../interfaces/Question'

const API_URL = import.meta.env.VITE_API_URL
const LIMIT_QUESTIONS = import.meta.env.VITE_LIMIT_QUESTIONS

export const getQuestions = async (): Promise<Question[]> => {
  const res = await fetch(`${API_URL}/data.json`)
  const json = await res.json()
  return json
    .sort(() => Math.random() - 0.5)
    .slice(0, LIMIT_QUESTIONS) as Question[]
}
