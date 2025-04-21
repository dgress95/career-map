import { create } from "zustand";

const useQuestionnaireStore = create((set) => ({
  answers: {},

  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),

  resetAnswers: () => set({ answers: {} }),
}));

export default useQuestionnaireStore;
