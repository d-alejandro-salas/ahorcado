// src/components/Parejas.jsx

import { useState, useReducer, useMemo } from 'react';
import { duplicatedCuadros } from '../utils/datos';
import rey_incognito from '../assets/images/rey_incognito.png';
import { Card } from './molecules/Card';
import { WinModal } from './molecules/WinModal';

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
  const [cuadrosSeleccionados, despachante] = useReducer(reducer, cuadrosIniciales);
  const [primerClickIndex, setPrimerClickIndex] = useState(null);
  const [clicks, setClicks] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [bloquearClicks, setBloquearClicks] = useState(false); // Estado para bloquear clics

  // Función para manejar el clic en un cuadro
  const handleCardClick = (index) => {
    if (bloquearClicks || cuadrosSeleccionados[index].habilitado) return;

    despachante({ type: 'SET_HABILITAR', payload: { index, habilitar: true } });
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
            despachante({
              type: 'SET_HABILITAR',
              payload: { index: primerClickIndex, habilitar: false },
            });
            despachante({ type: 'SET_HABILITAR', payload: { index, habilitar: false } });
            setBloquearClicks(false);
          }, 2000);
        }
      }
      return newClicks;
    });
  };

  const intentos = Math.floor(clicks / 2);
  const porcentaje = intentos > 0 ? (aciertos / intentos) * 100 : 0;

  return (
    <>
<div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-6">
  {cuadrosSeleccionados.map((cuadro, index) => (
    <Card
      key={index}
      cuadro={{ ...cuadro, placeholder: rey_incognito }}
      onClick={() => handleCardClick(index)}
    />
  ))}
  <p>Intentos: {intentos}</p>
  <p>Aciertos: {aciertos}</p>
  <p>Porcentaje: {porcentaje.toFixed(2)}%</p>
</div>
      {aciertos > 5 && <WinModal onRestart={() => window.location.reload()} />}
      </>
  );
};