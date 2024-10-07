// src/components/Votation.jsx

import { VoteContext } from "../contexts/Context";
import { cuadros } from "../utils/datos";
import { VoteCard } from "./molecules/VoteCard";
import { useContext, useEffect, useState } from "react";

export const Votation = () => {
  const { votos, reyVotado } = useContext(VoteContext);
  const [reyesAleatorios, setReyesAleatorios] = useState([]);

  useEffect(() => {
    const reyesQueComenVacas = cuadros.filter(rey => rey.vacas);
    const shuffledReyes = shuffleArray(reyesQueComenVacas);
    setReyesAleatorios(shuffledReyes);
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5); // Mezcla el array aleatoriamente
  };

  return (
    <main className="flex flex-col items-center mt-8">
      <h1 className="font-bold text-lg">
        {reyVotado
          ? (
            <span>
              Has votado a <span className="text-red-500">{reyVotado.name}</span>, quien cuenta con <span className="text-red-500">{votos[reyVotado.name]}</span> voto{votos[reyVotado.name] > 1 ? "s." : "."}
            </span>
          )
          : "Vota a tu rey favorito"}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {reyesAleatorios.map(rey => (
          <VoteCard key={rey.name} {...rey} />
        ))}
      </div>
    </main>
  );
};
