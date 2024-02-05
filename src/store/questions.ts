import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type QuestionsState } from '../interfaces/QuestionsState'
import { getQuestions } from '../services/questions'

export const useQuestionsStore = create<QuestionsState>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async () => {
          const questions = await getQuestions()
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
        selectAnswer: (questionId: number, selectedAnswer: number) => {
          const { questions } = get()
          const newQuestions = structuredClone(questions)
          const questionIndex = newQuestions.findIndex(
            (q) => q.id === questionId,
          )
          const questionInfo = newQuestions[questionIndex]
          const isCorrectAnswer = questionInfo.correctAnswer === selectedAnswer

          newQuestions[questionIndex] = {
            ...questionInfo,
            selectedAnswer,
            isCorrectAnswer,
          }

          set({ questions: newQuestions })
        },
        reset: () => {
          set({ questions: [], currentQuestion: 0 })
        },
      }
    },
    { name: 'questions' },
  ),
)
