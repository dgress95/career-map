import { create } from "zustand";

const useSimulationStore = create((set) => ({
  path: [],
  setPath: (newPath) => set({ path: newPath }),
}));

export default useSimulationStore;
