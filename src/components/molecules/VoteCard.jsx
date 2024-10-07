// src/components/molecules/VoteCard.jsx

import { VoteButton } from "../atoms/VoteButton";

export const VoteCard = ({ name, vacas, url }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-xs flex flex-col items-center text-center">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-sm text-gray-700">Come {vacas} vacas al día</p>
      <img src={url} alt={name} className="mt-2 w-full rounded-lg" />
      <VoteButton rey={{ name, vacas }} />
    </div>
  );
};
