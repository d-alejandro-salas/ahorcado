// src/components/atoms/VoteButton.jsx
import { useContext } from "react";
import { VoteContext } from "../../contexts/Context";

export const VoteButton = ({ rey }) => {
  const { votar, votos } = useContext(VoteContext); // Obtener la función votar y el estado de votos

  const handleClick = () => {
    votar(rey); // Llama a la función para votar
  };

  const votosRey = votos[rey.name] || 0; // Asegúrate de que votos tenga un valor por defecto

  return (
    <button className="rounded mt-2" onClick={handleClick}>
      <div className="p-2 bg-gray-200">Vótame</div>
      <div className="p-2 bg-black text-white">{votosRey}</div> {/* Usa votosRey en lugar de rey.votos */}
    </button>
  );
};
