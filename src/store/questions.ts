import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { type QuestionsState } from '../interfaces/QuestionsState'
import { getQuestions } from '../services/questions'

export const useQuestionsStore = create<QuestionsState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          questions: [],
          currentQuestion: 0,
          fetchQuestions: async () => {
            const questions = await getQuestions()
            set({ questions }, false, 'FETCH_QUESTIONS')
          },
          goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1

            if (nextQuestion < questions.length) {
              set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
            }
          },
          goPreviousQuestion: () => {
            const { currentQuestion } = get()
            const previousQuestion = currentQuestion - 1

            if (previousQuestion >= 0) {
              set(
                { currentQuestion: previousQuestion },
                false,
                'GO_PREVIOUS_QUESTION',
              )
            }
          },
          selectAnswer: (questionId: number, selectedAnswer: number) => {
            const { questions } = get()
            const newQuestions = structuredClone(questions)
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId,
            )
            const questionInfo = newQuestions[questionIndex]
            const isCorrectAnswer =
              questionInfo.correctAnswer === selectedAnswer

            newQuestions[questionIndex] = {
              ...questionInfo,
              selectedAnswer,
              isCorrectAnswer,
            }

            set({ questions: newQuestions }, false, 'SELECT_ANSWER')
          },
          reset: () => {
            set({ questions: [], currentQuestion: 0 }, false, 'RESET')
          },
        }
      },
      { name: 'questions' },
    ),
  ),
)
