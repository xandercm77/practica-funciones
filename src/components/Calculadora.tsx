export const Calculadora = () => {
  // Función que recibe dos números y retorna su suma
  const sumar = (a: number, b: number): number => a + b;

  // Función que recibe dos números y retorna su resta
  const restar = (a: number, b: number): number => a - b;

  // Función que recibe dos números y retorna el producto de su multiplicación
  const multiplicar = (a: number, b: number): number => a * b;

  // Función que divide dos números y retorna 0 en caso de que el divisor sea cero
  const dividir = (a: number, b: number): number => b === 0 ? 0 : a / b;

  const a = 15;
  const b = 4;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Calculadora</h2>
      <ul className="text-gray-700 space-y-1">
        <li>{a} + {b} = {sumar(a, b)}</li>
        <li>{a} - {b} = {restar(a, b)}</li>
        <li>{a} × {b} = {multiplicar(a, b)}</li>
        <li>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</li>
        <li className="text-sm text-gray-500 mt-2">Prueba ÷ 0: 15 ÷ 0 = {dividir(15, 0)}</li>
      </ul>
    </div>
  );
};