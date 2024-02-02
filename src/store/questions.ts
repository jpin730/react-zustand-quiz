import { create } from 'zustand'

import { type QuestionsState } from '../interfaces/QuestionsState'

const API_URL = ''

export const useQuestionsStore = create<QuestionsState>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const res = await fetch(`${API_URL}/data.json`)
      const json = await res.json()

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions })
    },
    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },
    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1

      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion })
      }
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      console.log('questionId', questionId, 'answerIndex', answerIndex)
    },
  }
})
