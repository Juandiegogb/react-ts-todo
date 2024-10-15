type Props = {
  tarea: string;
  borrarTarea: (index: number) => void;
  key: number;
  index: number;
};

export const Tarea = ({ tarea, borrarTarea, index }: Props) => {
  return (
    <div className="bg-gray-400 mt-2 flex flex-row items-center justify-between p-3 rounded-md">
      <span>
        <strong>{tarea}</strong>
      </span>
      <button
        className="bg-red-600 rounded-md p-3 font-extrabold"
        onClick={() => borrarTarea(index)}
      >
        Borrar
      </button>
    </div>
  );
};
