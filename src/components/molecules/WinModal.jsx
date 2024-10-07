// src/components/molecules/WinModal.jsx
import danny from '../../assets/images/Danny.jpg';
import princesita from '../../assets/images/princesita.png';

export const WinModal = ({ onRestart }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90 p-6">
      <div className="flex flex-col items-center justify-center bg-gray-200 w-80 h-48 rounded-lg">
        <div className="flex items-center justify-center gap-4">
          <img src={princesita} alt="Princesita Belu" className="ml-4 w-16 h-16 object-cover rounded-full" />
          <p className="text-lg font-bold text-center">¡Princesita ha ganado el juego! <br /> Premio: mi corazón ♥</p>
          <img src={danny} alt="Danny Alejandro" className="mr-4 w-16 h-16 object-cover rounded-full" />
        </div>
        <button
          onClick={onRestart}
          className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
          Volver a jugar
        </button>
      </div>
    </div>
  );
};

  