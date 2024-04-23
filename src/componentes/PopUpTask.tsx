import { useTaskStore, Task } from "@/stores/taskStorage";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

interface PopUpTaskProps {
  show: boolean;
  close: () => void;
  task: Task;
}

function PopUpTarea({ show, close, task }: PopUpTaskProps) {
  const { updateTask } = useTaskStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameTask: task.nameTask,
      descriptionTask: task.descriptionTask,
    },
  });
  const { toast } = useToast();

  const manejarEdicion = handleSubmit((data) => {
    updateTask({
      ...task,
      nameTask: data.nameTask,
      descriptionTask: data.descriptionTask,
    });
    close();
    toast({
      description: "Su tarea ha sido actualizada.",
    });
  });

  if (!show) return <></>;

  return (
    <form
      className={`${task.selectedColor} border-gray-300 border-2 p-4 rounded fixed inset-x-1/4 inset-y-1/3 shadow-2xl`}
      onSubmit={manejarEdicion}
    >
      <h1 className="font-bold text-center text-xl py-2 dark:text-black">
        Actualizar Tarea
      </h1>
      <div className="space-y-2">
        <input
          className="placeholder:text-slate-400 dark:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          {...register("nameTask", { required: true })}
        />
        {errors.nameTask && (
          <span className="text-xs pl-2 text-red-700 font-bold">
            No puede dejar ese campo vacío
          </span>
        )}
        <input
          className="placeholder:text-slate-400 dark:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          {...register("descriptionTask", { required: true })}
        />
        {errors.descriptionTask && (
          <span className="text-xs pl-2 text-red-700 font-bold">
            No puede dejar ese campo vacío
          </span>
        )}
        <div className="grid">
          <button
            className="dark:text-black px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white dark:hover:text-white"
            type="submit"
          >
            Guardar
          </button>
          <button
            className="dark:text-black px-2 py-1 m-2 rounded-md bg-white border-2 border-gray-600 text-lg font-bold hover:bg-black hover:text-white dark:hover:text-white"
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
