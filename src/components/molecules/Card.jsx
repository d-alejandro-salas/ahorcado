// src/components/molecules/Card.jsx

export const Card = ({ cuadro, onClick }) => {
    return (
      <div
        className="border-2 border-orange-500 bg-orange-200 p-2"
        onClick={onClick}>
        <img
          src={cuadro.habilitado ? cuadro.url : cuadro.placeholder}
          alt={cuadro.name}
          className="object-cover w-full h-full"
        />
      </div>
    );
  };  