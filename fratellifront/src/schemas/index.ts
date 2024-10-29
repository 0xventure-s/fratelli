import { array, date, InferOutput, number, object, string } from "valibot";

export const DraftProductSchema = object({
  lote: string(),
  variedad: string(),
  cantidad: number(),
  fechadeentrega: date(),
});

export const NuevaMateriaPrima = object({
  id: number(),
  lote: string(),
  variedad: string(),
  cantidad: number(),
  fechadeentrega: date(),
});

export const NuevaMateriasPrima = array(NuevaMateriaPrima);
export type MATERIA = InferOutput<typeof NuevaMateriaPrima>;

export const TrazabilidadSchema = object({
  cantidadMP: number(),
  LR1: number(),
  fechaHoraInicio: date(),
});

export const TRANS = object({
  id: number(),
  cantidadMP: number(),
  LR1: number(),
  fechaHoraInicio: date(),
  materiaPrima: object({
    // Agrega materiaPrima con solo el campo variedad
    variedad: string(), // Hacemos que sea opcional por si no existe
  }),
});

export const TrazabilidadSchemas = array(TRANS);

export type TRAZABILIDAD = InferOutput<typeof TRANS>;



export const TostadoSchema = object({
  inicioTrazabilidadId: number(),  // Este es el ID que estás utilizando para la relación
  fechaHoraTostado: date(),       // Asegúrate de que sea un tipo de dato correcto
  tipoDeTostado: string(),
  temperatura: number(),
  humedad: number(),
  tiempoDeTostado: number(),
});