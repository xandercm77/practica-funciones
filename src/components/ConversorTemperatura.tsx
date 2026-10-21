export const ConversorTemperatura = () => {
  // Función que recibe grados Celsius y los convierte a Fahrenheit
  const celsiusAFahrenheit = (c: number): number => (c * 9 / 5) + 32;

  // Función que recibe grados Fahrenheit y los convierte a Celsius
  const fahrenheitACelsius = (f: number): number => (f - 32) * 5 / 9;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Conversor de Temperaturas</h2>
      <ul className="text-gray-700 space-y-1">
        <li>25°C = {celsiusAFahrenheit(25)}°F</li>
        <li>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</li>
      </ul>
    </div>
  );
};