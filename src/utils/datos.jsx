// src/utils/datos.jsx

export const cuadros = [
  { name: "Ervigio", url: "https://www.html6.es/img/rey_ervigio.png"},
  { name: "Ataúlfo", url: "https://www.html6.es/img/rey_ataulfo.png"},
  { name: "Atanagildo", url: "https://www.html6.es/img/rey_atanagildo.png"},
  { name: "Leogivildo", url: "https://www.html6.es/img/rey_leogivildo.png"},
  { name: "Sisebuto", url: "https://www.html6.es/img/rey_sisebuto.png"},
  { name: "Recesvinto", url: "https://www.html6.es/img/rey_recesvinto.png"}
];

// Helper function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

  // Duplicate the items and shuffle them
  export const duplicatedCuadros = shuffleArray([...cuadros, ...cuadros]);