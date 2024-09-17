// src/components/Aside.jsx

export const Aside = ({ selectedCity, rooms, people, days, name }) => {

  return (
    <aside className="p-4 border-t mt-4 md:border-l md:border-dotted">
      <h1 className="text-2xl font-bold mb-4">Resumen</h1>
      <img
        src={selectedCity.image}
        alt={selectedCity.place}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <p className="text-lg"><b>City:</b> {selectedCity.place}</p>
      <p className="text-lg"><b>Price per Unit:</b> ${selectedCity.price}</p>
      {name && <p className="text-lg name"><b>Name:</b> {name}</p>}
      <p className="text-lg"><b>Rooms:</b> {rooms || 1}</p>
      <p className="text-lg"><b>People:</b> {people || 1}</p>
      <p className="text-lg"><b>Days booked:</b> {days || 1}</p>
      <p className="text-3xl">
        <b>Total price:</b> ${selectedCity.price * (rooms || 1) * (people || 1) * (days || 1)}
      </p>
    </aside>
  );
};