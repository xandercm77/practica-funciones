import React from 'react';
import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Práctica de Funciones: TypeScript + React
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Calculadora />
          <ConversorTemperatura />
          <CalculadoraIMC />
          <ValidadorEdad />
          <AnalizadorTexto />
          <EstadisticasArreglo />
          <GeneradorPassword />
          <AplicadorDescuentos />
          <SistemaCalificaciones />
          <CarritoCompras />
        </div>
      </div>
    </div>
  );
}

export default App;