// src/components/atoms/AlphabetButtons.jsx

import React from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const AlphabetButtons = ({ onClick, correctGuesses, incorrectGuesses }) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {alphabet.map((letter) => {
        const isCorrect = correctGuesses.has(letter);
        const isIncorrect = incorrectGuesses.has(letter);

        return (
          <button
            key={letter}
            onClick={() => onClick(letter)}
            className={`m-1 p-2 border border-gray-400 rounded ${
              isCorrect ? 'bg-green-500' : isIncorrect ? 'bg-red-500' : 'bg-gray-200'
            }`}
            disabled={isCorrect || isIncorrect} // Disable the button after clicking
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
