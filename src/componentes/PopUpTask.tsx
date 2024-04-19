import { useTaskStore, Task } from "@/stores/taskStorage";
import { useState, FormEvent } from "react";

interface PopUpTaskProps {
  show: boolean;
  close: () => void;
  task: Task;
}

function PopUpTarea({ show, close, task }: PopUpTaskProps) {
  const { updateTask } = useTaskStore();
  const { nameTask, descriptionTask, selectedColor } = task;
  const [nameTaskInput, setNameTask] = useState<string>(nameTask);
  const [descriptionTaskInput, setDescriptionTask] =
    useState<string>(descriptionTask);

  const manejarEdicion = (event: FormEvent) => {
    event.preventDefault();
    if (nameTaskInput.trim() !== "" && descriptionTaskInput.trim() !== "") {
      updateTask({
        ...task,
        nameTask: nameTaskInput,
        descriptionTask: descriptionTaskInput,
      });
    }
    close();
  };

  if (!show) return <></>;

  return (
    <form
      className={`${selectedColor} border-gray-300 border-2 p-4 rounded fixed inset-x-1/4 inset-y-1/3 shadow-2xl`}
    >
      <h1 className="font-bold text-center text-xl py-2">Actualizar Tarea</h1>
      <div className="space-y-2">
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="nameTask"
          value={nameTaskInput}
          onChange={(event) => setNameTask(event.target.value)}
        />
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          name="descriptionTask"
          value={descriptionTaskInput}
          onChange={(event) => setDescriptionTask(event.target.value)}
        />
        <div className="grid">
          <button
            className="px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white"
            type="submit"
            onClick={manejarEdicion}
          >
            Guardar
          </button>
          <button
            className="px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white"
            type="button"
            onClick={close}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export default PopUpTarea;
