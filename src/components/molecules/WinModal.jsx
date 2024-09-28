// src/components/molecules/WinModal.jsx

export const WinModal = ({ onRestart }) => {
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90 p-6">
        <div className="flex flex-col items-center justify-center bg-gray-200 w-80 h-36 rounded-lg">
          <p className="mb-4 text-lg font-bold">¡Has ganado el juego!</p>
          <button
            onClick={onRestart}
            className="bg-orange-500 text-white py-2 px-4 rounded"
          >
            Volver a jugar
          </button>
        </div>
      </div>
    );
  };
  