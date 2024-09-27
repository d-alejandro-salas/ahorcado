// src/components/Parejas.jsx

import { useState, useReducer, useMemo } from 'react';
import { duplicatedCuadros } from '../utils/datos';
import rey_incognito from '../assets/images/rey_incognito.png';

// Reducer optimizado
const reducer = (state, action) => {
  return state.map((cuadro, index) =>
    index === action.payload.index
      ? { ...cuadro, habilitado: action.payload.habilitar }
      : cuadro
  );
};

export const Parejas = () => {
  const cuadrosIniciales = useMemo(() => duplicatedCuadros, []);
  const [cuadrosSeleccionados, dispatch] = useReducer(reducer, cuadrosIniciales);
  const [primerClickIndex, setPrimerClickIndex] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [bloquearClicks, setBloquearClicks] = useState(false); // Estado para bloquear clics

  // Función para manejar el clic en un cuadro
  const handleCardClick = (index) => {
    if (bloquearClicks || cuadrosSeleccionados[index].habilitado) return;

    dispatch({ type: 'SET_HABILITAR', payload: { index, habilitar: true } });
    setClicks((prevClicks) => {
      const newClicks = prevClicks + 1;

      if (newClicks % 2 === 1) {
        setPrimerClickIndex(index);
      } else {
        const coinciden =
          cuadrosSeleccionados[primerClickIndex].name ===
          cuadrosSeleccionados[index].name;

        if (coinciden) {
          setAciertos((prevAciertos) => prevAciertos + 1);
        } else {
          setBloquearClicks(true);
          setTimeout(() => {
            dispatch({
              type: 'SET_HABILITAR',
              payload: { index: primerClickIndex, habilitar: false },
            });
            dispatch({ type: 'SET_HABILITAR', payload: { index, habilitar: false } });
            setBloquearClicks(false);
          }, 2000);
        }
      }
      return newClicks;
    });
  };

  const intentos = Math.floor(clicks / 2);
  const porcentaje = intentos > 0 ? ((aciertos / 2) / intentos) * 100 : 0;

  return (
    <>
      <div
        className="grid grid-cols-6 grid-rows-2 gap-4 m-4"
          
      >
        {cuadrosSeleccionados.map((cuadro, index) => (
          <div
            key={index}
            className="border-2 border-orange-500 bg-orange-200 p-2"
            onClick={() => handleCardClick(index)}>
            <img
              src={cuadro.habilitado ? cuadro.url : rey_incognito}
              alt={cuadro.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      <p>Intentos: {intentos}</p>
      <p>Aciertos: {aciertos}</p>
      <p>Porcentaje: {porcentaje.toFixed(2)}%</p>
      </div>
      {aciertos > 5 && (
  <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90 p-6">
    <div className="flex flex-col items-center justify-center bg-gray-200 w-80 h-36 rounded-lg">
      <p className="mb-4 text-lg font-bold">¡Has ganado el juego!</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-orange-500 text-white py-2 px-4 rounded">
        Volver a jugar
      </button>
    </div>
  </div>
)}
    </>
  );
};
