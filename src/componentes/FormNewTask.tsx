import { useTaskStore } from "@/stores/taskStorage";
import { CardColor } from "./CardColor";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

interface FormInputs {
  nameTask: string;
  descriptionTask: string;
  selectedColor: string;
}

function FormNewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const { addTask } = useTaskStore();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { toast } = useToast();

  const onSubmit = handleSubmit((data) => {
    const { nameTask, descriptionTask } = data;
    const idTask = uuidv4();
    addTask({
      idTask,
      nameTask,
      descriptionTask,
      selectedColor,
      completedTask: false,
    });
    reset();
    setSelectedColor("");
    toast({
      description: "Su tarea ha sido registrada.",
    });
  });

  return (
    <form
      className="bg-purple-200 dark:bg-amber-950 justify-center p-2 rounded shadow-xl"
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-center text-xl py-2">Nueva Tarea</h1>
      <div className="flex">
        <div className="w-5/6 space-y-2 justify-center">
          {/*Primer input para escribir el nombre de la tarea*/}
          <input
            {...register("nameTask", {
              required: true,
            })}
            type="text"
            className="dark:text-black placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Nombre de tu nueva tarea"
          />
          {errors.nameTask && (
            <span className="text-xs pl-2 text-red-700 font-bold dark:text-red-500">
              Este campo es requerido
            </span>
          )}
          {/*Segundo input para escribir la descripción de la tarea*/}
          <input
            {...register("descriptionTask", {
              required: true,
            })}
            type="text"
            className="dark:text-black placeholder:text-slate-400 block bg-white w-full m-1 border border-slate-300 rounded-md py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Descripción de tu nueva tarea"
          />
          {errors.descriptionTask && (
            <span className="text-xs pl-2 text-red-700 font-bold dark:text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>
        <button
          className="px-3 ml-5 rounded-md bg-purple-400 dark:bg-amber-600 border-2 border-purple-600 dark:border-amber-600 text-3xl font-bold hover:bg-purple-500 hover:text-white"
          type="submit"
        >
          +
        </button>
      </div>
      <h1 className="font-bold m-1 py-1 pl-1 text-base">Card Color</h1>
      {/* El usuario podrá elegir el color de la tarjeta para la nueva tarea */}
      <div className="justify-center flex">
        <CardColor
          className="bg-green-200"
          onClick={() => setSelectedColor("bg-green-200")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-fuchsia-300"
          onClick={() => setSelectedColor("bg-fuchsia-300")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-red-200"
          onClick={() => setSelectedColor("bg-red-200")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-sky-200"
          onClick={() => setSelectedColor("bg-sky-200")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-yellow-200"
          onClick={() => setSelectedColor("bg-yellow-200")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-lime-300"
          onClick={() => setSelectedColor("bg-lime-300")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-cyan-300"
          onClick={() => setSelectedColor("bg-cyan-300")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-blue-300"
          onClick={() => setSelectedColor("bg-blue-300")}
          seleccion={selectedColor}
        />

        <CardColor
          className="bg-red-300"
          onClick={() => setSelectedColor("bg-red-300")}
          seleccion={selectedColor}
        />
      </div>
    </form>
  );
}
export default FormNewTask;
