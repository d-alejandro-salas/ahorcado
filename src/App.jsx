// src/App.jsx

import { useState } from 'react';
import { words } from './utils/data';
import { NewGameButton } from './components/atoms/NewGameButton';
import { images } from './assets/images/images'; // Asegúrate de que la ruta es correcta
import { GameOver } from './components/GameOver';
import { GameOn } from './components/GameOn';

export const App = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(new Set());
  const [errorCount, setErrorCount] = useState(0); // Inicia con 0 en lugar de -1

  const currentWord = words[currentWordIndex];
  const currentWordArray = Array.from(currentWord.palabro.toUpperCase());

  const handleButtonClick = (letter) => {
    const upperCaseLetter = letter.toUpperCase();

    if (currentWordArray.includes(upperCaseLetter)) {
      setCorrectGuesses((prevGuesses) => new Set(prevGuesses.add(upperCaseLetter)));
    } else {
      setIncorrectGuesses((prevGuesses) => new Set(prevGuesses.add(upperCaseLetter)));
      setErrorCount((prevCount) => prevCount + 1); // Actualiza el estado correctamente
    }
  };

  const handlePlayAgain = () => {
    setCorrectGuesses(new Set());
    setIncorrectGuesses(new Set());
    setErrorCount(0); // Reinicia el contador de errores
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="flex flex-col items-center m-12">
      {(errorCount -1) < images.length ? (
        <GameOn 
          currentWord={currentWord} 
          currentWordArray={currentWordArray} 
          correctGuesses={correctGuesses} 
          handleButtonClick={handleButtonClick} 
          incorrectGuesses={incorrectGuesses} 
          errorCount={errorCount} 
          images={images} 
        />
      ) : (
        // Se pasa la palabra correcta al componente GameOver
        <GameOver word={currentWord.palabro} image={images[5]} />
      )}
      <NewGameButton onClick={handlePlayAgain} />
    </div>
  );
};
