import { Tarea } from "./Tarea";

type Props = {
  tareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ tareas, borrarTarea }: Props) => {
  return (
    <div className="w-full">
      {tareas
        ? tareas.map((tarea, index) => (
            <Tarea
              borrarTarea={borrarTarea}
              tarea={tarea}
              key={index}
              index={index}
            />
          ))
        : null}
    </div>
  );
};
