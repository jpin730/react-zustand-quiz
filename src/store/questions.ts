import { create } from 'zustand'

import { type QuestionsState } from '../interfaces/QuestionsState'

const API_URL = ''

export const useQuestionsStore = create<QuestionsState>((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const res = await fetch(`${API_URL}/data.json`)
      const json = await res.json()

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },
  }
})
