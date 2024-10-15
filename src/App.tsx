import { useState } from "react";
import { ListaTareas } from "./components/ListaTareas";

export const App = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [tareas, setTareas] = useState<string[]>([]);

  const crearTarea = () => {
    setTareas((tareas) => [...tareas, nuevaTarea]);
    setNuevaTarea("");
  };

  const borrarTarea = (index: number) => {
    setTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="text-white flex justify-center items-center bg-gray-700 w-full h-screen flex-col">
      <div className="w-1/3 justify-center items-center flex flex-col">
        <h1 className=" text-6xl font-mono font-extrabold">Lista de tareas</h1>
        <div className="flex justify-between w-full px-6">
          <input
            type="text"
            placeholder="Nueva tarea"
            required
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            className=" p-3 text-black rounded-lg w-3/4"
          />
          <button
            className="bg-green-600 p-3 font-extrabold rounded-md mt-3 flex-1 mx-3"
            onClick={crearTarea}
          >
            Crear tarea
          </button>
        </div>
        <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
      </div>
    </div>
  );
};
