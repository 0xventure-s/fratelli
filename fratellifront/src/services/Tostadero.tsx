import axios from 'axios';
import { safeParse } from "valibot";  // Asegúrate de tener esto importado
import { TostadoSchema } from '../schemas';
 // Ajusta la ruta según tu estructura

type CrearNuevoTostadoProps = {
    [k: string]: FormDataEntryValue;
}

export async function CrearNuevoTostado(data: CrearNuevoTostadoProps) {
  try {
    // Validar y parsear los datos con safeParse
    const result = safeParse(TostadoSchema, {
      fechaHoraTostado: new Date(data.fechaHoraTostado as string),  // Asegúrate de que sea un objeto Date
      tipoDeTostado: data.tipoDeTostado,
      temperatura: +data.temperatura,                       // Convertir a número
      humedad: +data.humedad,                               // Convertir a número
      tiempoDeTostado: +data.tiempoDeTostado,             // Convertir a número
    });

    console.log(result);

    if (result.success) {
        const url = `${import.meta.env.VITE_API_URL}/api/fratelli/trazabilidad/tostadero/`;
        console.log(url);
        
      
      // Realiza la solicitud POST al backend
      const response = await axios.post(url, result.output); // Usa el output del safeParse

      // Imprimir el resultado completo del backend
      console.log("Tostado creado:", response.data);
      return response.data; // Devolver la data si se necesita en otro lugar
    } else {
     
      throw new Error("Datos no válidos"); // Manejo de errores según tu lógica
    }
  } catch (error) {
    console.error("Error al crear tostado:", error);
  }
}
