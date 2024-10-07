// src/contexts/Context.jsx

import React, { createContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votos, setVotos] = useState({});
  const [reyVotado, setReyVotado] = useState(null); // Para almacenar el último rey votado

  const votar = (rey) => {
    setVotos((prevVotos) => ({
      ...prevVotos,
      [rey.name]: (prevVotos[rey.name] || 0) + 1,
    }));
    setReyVotado(rey); // Actualizar el rey votado
  };

  return (
    <VoteContext.Provider value={{ votos, votar, reyVotado }}>
      {children}
    </VoteContext.Provider>
  );
};
