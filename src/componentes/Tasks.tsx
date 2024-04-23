import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";
import { cn } from "../lib/utils";
import PopUpTarea from "./PopUpTask";
import { useState } from "react";
import { useTaskStore, Task } from "@/stores/taskStorage";

interface TareaProps {
  task: Task;
}

function Tasks({ task }: TareaProps) {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const { deleteTask, completeTask } = useTaskStore();
  return (
    <div
      key={task.idTask}
      className={cn(`${task.selectedColor} flex py-1 rounded-md shadow-xl`, {
        "bg-green-600": task.completedTask,
      })}
    >
      {/* El background es depende del color seleccionado de la card color */}
      <div className="pl-4 w-full py-2">
        <p
          className={cn("text-lg font-mono dark:text-black", {
            "line-through": task.completedTask,
          })}
        >
          {task.nameTask}
          {/*Solo aparecerá el titulo de la nueva tarea en este apartado*/}
        </p>
      </div>
      {!task.completedTask && (
        <div className="p-2 pl-4 flex space-x-2 justify-end">
          {/* Boton para editar */}
          <button onClick={() => setMostrarPopUp(true)}>
            <FaEdit className="size-6 text-gray-500 hover:scale-125" />
          </button>
          {/* Ventana emergente */}
          <PopUpTarea
            show={mostrarPopUp}
            close={() => setMostrarPopUp(false)}
            task={task}
          />
          {/* Boton para eliminar tarea */}
          <button onClick={() => deleteTask(task.idTask)}>
            <RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125" />
          </button>
          {/* Boton para marcar tarea como completada */}
          <button onClick={() => completeTask(task.idTask)}>
            <IoCheckbox className="size-6 text-lime-600 hover:scale-125" />
          </button>
        </div>
      )}
      {task.completedTask && (
        <div className="p-2 pl-4 flex space-x-2 justify-end">
          {/*Este ya no será un botón porque solo será un indicador de que es una tarea completada*/}
          <IoCheckbox className="size-6 text-black" />
          <button onClick={() => deleteTask(task.idTask)}>
            <RiDeleteBin5Fill className="size-6 text-gray-600 hover:scale-125" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Tasks;
