export const GeneradorPassword = () => {
  // Función que construye una contraseña aleatoria en base a la longitud y los tipos de caracteres permitidos
  const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    let caracteresPermitidos = letras;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;

    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      password += caracteresPermitidos[indiceAleatorio];
    }
    return password;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">Generador de Contraseñas</h2>
      <ul className="text-gray-700 space-y-1 font-mono text-sm">
        <li>Básica (8): {generarPassword(8, false, false)}</li>
        <li>Media (12): {generarPassword(12, true, false)}</li>
        <li>Fuerte (16): {generarPassword(16, true, true)}</li>
      </ul>
    </div>
  );
};