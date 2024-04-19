import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface PropsTask {
  task: Task;
}
export interface Task {
  idTask: string;
  nameTask: string;
  descriptionTask: string;
  selectedColor: string;
  completedTask: boolean;
}
interface MyState {
  tasks: Task[];
}
interface StateActions {
  addTask: (task: Task) => void;
  deleteTask: (idTask: string) => void;
  updateTask: (task: Task) => void;
  completeTask: (idTask: string) => void;
}

export const useTaskStore = create<MyState & StateActions>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) => set({ tasks: [...get().tasks, task] }),
      deleteTask: (idTask) =>
        set({ tasks: get().tasks.filter((task) => task.idTask !== idTask) }),
      updateTask: (task) =>
        set({
          tasks: get().tasks.map((t) =>
            t.idTask === task.idTask ? task : t
          ),
        }),
      completeTask: (idTask) =>
        set({
          tasks: get().tasks.map((t) =>
            t.idTask === idTask
              ? { ...t, completedTask: !t.completedTask }
              : t
          ),
        }),
    }),
    {
      name: "tasks-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
