interface Producto {
  producto: string;
  precio: number;
  cantidad: number;
}

export const CarritoCompras = () => {
  // Función que obtiene el precio parcial multiplicando costo por unidades
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;

  // Función que calcula el impuesto del 16% sobre un monto dado
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;

  // Función que calcula el importe final sumando el subtotal y el IVA
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);

  // Función que convierte un valor numérico a un formato monetario con signo de pesos y 2 decimales
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito: Producto[] = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 }
  ];

  const subtotalGeneral = carrito.reduce((acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0);
  const ivaTotal = calcularIVA(subtotalGeneral);
  const totalPagar = calcularTotal(subtotalGeneral);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Carrito de Compras</h2>
      <ul className="text-gray-700 space-y-1 mb-3">
        {carrito.map((item, idx) => (
          <li key={idx}>
            {item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
          </li>
        ))}
      </ul>
      <div className="border-t pt-2 text-gray-800">
        <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
        <p>IVA (16%): {formatearPrecio(ivaTotal)}</p>
        <p className="font-bold text-lg mt-1">Total: {formatearPrecio(totalPagar)}</p>
      </div>
    </div>
  );
};