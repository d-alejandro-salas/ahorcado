// src/components/atoms/NewGameButton.jsx

import React from 'react';

export const NewGameButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-sky-400 hover: bg-sky-600 generalButton'
    >
      JUGAR DE NUEVO
    </button>
  );
};
