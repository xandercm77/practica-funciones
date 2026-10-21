export const CalculadoraIMC = () => {
  // Función que calcula el Índice de Masa Corporal dado el peso en kg y la altura en metros
  const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

  // Función que retorna la categoría correspondiente según el valor del IMC
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Calculadora de IMC</h2>
      <p className="text-gray-700 mb-2">Peso: {peso} kg | Altura: {altura} m</p>
      <ul className="text-gray-700 space-y-1">
        <li><strong>IMC:</strong> {imc.toFixed(2)}</li>
        <li><strong>Clasificación:</strong> {clasificarIMC(imc)}</li>
      </ul>
    </div>
  );
};