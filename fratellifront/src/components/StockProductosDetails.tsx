export default function StockDetaisl() {
  return (
    <>
      <tr className="border-b text-center">
        <td className="p-3 text-gray-800 font-semibold border-r">LE1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LR1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LP1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">Café Arábico</td>
        <td className="p-3 text-gray-800 font-semibold border-r">1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">5</td>
        <td className="p-3 text-gray-800 font-semibold border-r">3</td>
        <td className="p-3 text-gray-800 font-semibold border-r">1</td>
        <td className="p-3">
          <div className="flex justify-between gap-2">
            {/* Botón "Editar" */}
            <button className="text-blue-600 hover:underline">Editar</button>
                <button className="text-red-600 hover:underline ml-2">Eliminar</button>
            {/* Botón "Ver Trazabilidad" */}
            <button className="text-gray-800 border rounded-md w-full text-xs p-2 font-medium  transition-all hover:bg-gray-100">
              Ver Trazabilidad
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
