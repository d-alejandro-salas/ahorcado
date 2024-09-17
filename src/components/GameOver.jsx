// src/components/GameOver.jsx

import { HangmanImage } from './atoms/HangmanImage'; // Importar el átomo

export const GameOver = ({ word, image }) => {
  return (
    <>
      <h1>Vaya, respuesta incorrecta</h1>
      <p>La respuesta correcta era <strong>{word}</strong></p>

      {/* Usar el átomo para mostrar la imagen del Game Over */}
      <HangmanImage image={image} />
    </>
  );
};
