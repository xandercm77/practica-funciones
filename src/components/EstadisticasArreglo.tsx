export const EstadisticasArreglo = () => {
  // Función que calcula el promedio aritmético de un arreglo de números
  const calcularPromedio = (nums: number[]): number => nums.length === 0 ? 0 : nums.reduce((a, b) => a + b, 0) / nums.length;

  // Función que recorre el arreglo y devuelve el valor máximo
  const encontrarMaximo = (nums: number[]): number => Math.max(...nums);

  // Función que recorre el arreglo y devuelve el valor mínimo
  const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Estadísticas de Arreglo</h2>
      <p className="text-gray-700 mb-2">Números: [{numeros.join(', ')}]</p>
      <ul className="text-gray-700 space-y-1">
        <li>Promedio: {calcularPromedio(numeros).toFixed(2)}</li>
        <li>Máximo: {encontrarMaximo(numeros)}</li>
        <li>Mínimo: {encontrarMinimo(numeros)}</li>
      </ul>
    </div>
  );
};