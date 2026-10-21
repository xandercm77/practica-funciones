export const AplicadorDescuentos = () => {
  // Función de orden superior que aplica una función callback de descuento sobre un precio y calcula el total final
  const aplicarDescuento = (precio: number, calcularDescuento: (p: number) => number): number => {
    return precio - calcularDescuento(precio);
  };

  // Función que calcula el 10% de descuento sobre un valor
  const descuento10 = (p: number): number => p * 0.10;

  // Función que calcula el 25% de descuento sobre un valor
  const descuento25 = (p: number): number => p * 0.25;

  // Función que calcula el 15% de descuento especial para estudiantes
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precioOriginal = 1000;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Aplicador de Descuentos</h2>
      <p className="text-gray-700 mb-2">Precio original: ${precioOriginal}</p>
      <ul className="text-gray-700 space-y-1">
        <li>Con 10% off: ${aplicarDescuento(precioOriginal, descuento10)}</li>
        <li>Con 25% off: ${aplicarDescuento(precioOriginal, descuento25)}</li>
        <li>Descuento estudiante: ${aplicarDescuento(precioOriginal, descuentoEstudiante)}</li>
      </ul>
    </div>
  );
};