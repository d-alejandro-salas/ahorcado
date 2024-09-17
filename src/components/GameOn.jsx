// src/components/GameOn.jsx
import {AlphabetButtons} from './atoms/AlphabetButtons'
import { HangmanImage } from './atoms/HangmanImage'; // Importar el átomo

export const GameOn = ({ 
  currentWord, 
  currentWordArray, 
  correctGuesses, 
  handleButtonClick, 
  incorrectGuesses, 
  errorCount, 
  images 
}) => {
  return (
    <>
      <h1>{currentWord.pregunta}</h1>
      <div className="flex">
        {currentWordArray.map((letter, idx) => (
          <input
            key={idx}
            type="text"
            value={correctGuesses.has(letter) ? letter : ''}
            maxLength="1"
            className="w-8 h-8 border text-center m-1 uppercase"
            readOnly
          />
        ))}
      </div>
      <AlphabetButtons 
        onClick={handleButtonClick} 
        correctGuesses={correctGuesses} 
        incorrectGuesses={incorrectGuesses} 
      />
      
      {/* Usar el átomo para mostrar la imagen del ahorcado */}
      <HangmanImage errorCount={errorCount} images={images} />
    </>
  );
};
