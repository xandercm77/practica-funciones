interface Alumno {
  nombre: string;
  califs: number[];
}

export const SistemaCalificaciones = () => {
  // Función que calcula la media aritmética de una lista de notas
  const calcularPromedio = (calificaciones: number[]): number =>
    calificaciones.length === 0 ? 0 : calificaciones.reduce((a, b) => a + b, 0) / calificaciones.length;

  // Función que convierte un promedio numérico en una letra de calificación (A, B, C, D, F)
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Función que retorna true si la calificación es igual o superior a 70
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos: Alumno[] = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Sistema de Calificaciones</h2>
      <ul className="text-gray-700 space-y-2">
        {alumnos.map((alumno, idx) => {
          const promedio = calcularPromedio(alumno.califs);
          return (
            <li key={idx}>
              <strong>{alumno.nombre}</strong>: Promedio {promedio.toFixed(1)} -
              Letra {obtenerLetra(promedio)} -
              {estaAprobado(promedio) ? <span className="text-green-600 font-semibold"> Aprobado</span> : <span className="text-red-600 font-semibold"> Reprobado</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};