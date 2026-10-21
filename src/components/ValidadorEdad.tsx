export const ValidadorEdad = () => {
  // Función que evalúa si un número dado es mayor o igual a 18
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Función que genera una cadena indicando si la persona puede votar o los años restantes
  const obtenerMensaje = (edad: number): string =>
    esMayorDeEdad(edad) ? "Puede votar" : `Le faltan ${18 - edad} años`;

  const edades = [15, 18, 25, 12];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Validador de Edad</h2>
      <ul className="text-gray-700 space-y-1">
        {edades.map((edad, index) => (
          <li key={index}>Edad {edad}: {obtenerMensaje(edad)}</li>
        ))}
      </ul>
    </div>
  );
};