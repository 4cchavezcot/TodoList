import Tasks from "./componentes/Tasks";
import FormNewTask from "./componentes/FormNewTask";
import { useTaskStore } from "./stores/taskStorage";

function App() {
  const { tasks } = useTaskStore();

  return (
    <div className="w-full h-screen bg-gray-250 flex justify-center bg-imagen-fondo bg-cover">
      <div className="justify-center content-center">
        <h1 className="font-bold font-serif italic text-3xl sm:text-5xl text-center pb-3 lg:pb-6">
          Bienvenida a tu
        </h1>
        <h1 className="font-bold text-4xl sm:text-7xl text-center pb-6 lg:pb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            ToDo List
          </span>
        </h1>
        <div className="lg:flex lg:space-x-10">
          <div className="justify-start m-5 space-y-1">
            <FormNewTask />
            <div className="flex justify-center space-x-9">
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">Total pendientes</p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tasks.filter((task) => !task.completedTask).length}
                </div>
              </div>
              <div className="flex items-center py-2">
                <p className="text-sm font-bold pr-4 pl-2">
                  Tareas completadas
                </p>
                <div className="bg-red-500 text-white font-bold px-6 py-4 rounded">
                  {tasks.filter((task) => task.completedTask).length}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start m-5 min-w-96 relative space-y-3">
            {tasks.map((tarea) => (
              <Tasks key={tarea.idTask} task={tarea} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
