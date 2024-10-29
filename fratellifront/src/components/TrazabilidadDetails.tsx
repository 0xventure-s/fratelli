import { useNavigate } from "react-router-dom";
import { TRAZABILIDAD } from "../schemas";

export type TrazabilidadDetailsProps = {
  trazable: TRAZABILIDAD,
};

export default function TrazabilidadDetails({ trazable }: TrazabilidadDetailsProps) {


  const navigate = useNavigate()
  return (
    <>
      <tr className="border-b text-center">
        <td className="p-3 text-gray-800 font-semibold border-r">LP{trazable.id}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LR{trazable.LR1}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">{trazable.materiaPrima.variedad}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">{trazable.cantidadMP}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          {trazable.fechaHoraInicio?.toLocaleDateString("es-AR", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </td>
        <td className="p-3">
          <div className="flex justify-between gap-2">
            <button
              className={`${
                trazable.fechaHoraInicio
                  ? "text-green-800 border border-green-800" // Color si está iniciado
                  : "text-blue-800 border border-blue-600"  // Color si no está iniciado
              } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
            >
              Iniciado
            </button>
            <button className="text-gray-400 border border-gray-400 rounded-lg w-full uppercase text-sm p-2 text-center hover:bg-gray-100 font-semibold"  onClick={() => navigate(`/trazabilidad/tostadero?id=${trazable.id}`)} >
              Tostadero
            </button>
            <button className="text-gray-400 border border-gray-400 rounded-lg w-full uppercase text-sm p-2 text-center font-semibold">
              Reposo
            </button>
            <button className="text-gray-400 border border-gray-400 rounded-lg w-full uppercase text-sm p-2 text-center font-semibold">
              Análisis
            </button>
            <button className="text-gray-400 border border-gray-400 rounded-lg w-full uppercase text-sm p-2 text-center font-semibold">
              Embalaje
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
