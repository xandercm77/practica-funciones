export const AnalizadorTexto = () => {
  // Función que cuenta el número de palabras en un texto separadas por espacios
  const contarPalabras = (texto: string): number => texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;

  // Función que busca y cuenta la cantidad total de vocales en una cadena de texto
  const contarVocales = (texto: string): number => (texto.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;

  // Función que invierte el orden de los caracteres de un texto
  const invertirTexto = (texto: string): string => texto.split('').reverse().join('');

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Analizador de Texto</h2>
      <p className="text-gray-700 mb-2 italic">Texto: "{texto}"</p>
      <ul className="text-gray-700 space-y-1">
        <li>Palabras: {contarPalabras(texto)}</li>
        <li>Vocales: {contarVocales(texto)}</li>
        <li>Invertido: {invertirTexto(texto)}</li>
      </ul>
    </div>
  );
};