import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import AddApartmentForm from "./components/AddApartmentForm/AddApartmentForm";
import ApartmentsList from "./components/ApartmentsList/ApartmentsList";

import "./App.css";

function App() {
  const defaultRents = [
    {
      title: "House in mountains",
      rooms: 3,
      price: 150,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum at cum. Accusamus in voluptates perspiciatis ipsa magni laborum a, ratione harum ex vitae provident veritatis ea sint fuga. Adipisci.",
      id: uuidv4(),
    },
    {
      title: "Beach bungalow",
      rooms: 5,
      price: 220,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum at cum. Accusamus in voluptates perspiciatis ipsa magni laborum a, ratione harum ex vitae provident veritatis ea sint fuga. Adipisci.",
      id: uuidv4(),
    },
    {
      title: "Room in the city center",
      rooms: 1,
      price: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum at cum. Accusamus in voluptates perspiciatis ipsa magni laborum a, ratione harum ex vitae provident veritatis ea sint fuga. Adipisci.",
      id: uuidv4(),
    },
    {
      title: "Cozy apartment in village",
      rooms: 2,
      price: 50,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum at cum. Accusamus in voluptates perspiciatis ipsa magni laborum a, ratione harum ex vitae provident veritatis ea sint fuga. Adipisci.",
      id: uuidv4(),
    },
  ];

  const [rents, setRents] = useState(
    JSON.parse(localStorage.getItem("localRents")) || defaultRents
  );
  const [filteredRents, setFilteredRents] = useState(rents);

  useEffect(() => {
    localStorage.setItem("localRents", JSON.stringify(rents));
  }, [rents]);

  const addRent = (newRent) => {
    setFilteredRents((prevRents) =>
      prevRents ? [...prevRents, newRent] : [newRent]
    );
    setRents((prevRents) => (prevRents ? [...prevRents, newRent] : [newRent]));
  };

  const deleteRent = (rentId) => {
    setRents(() => rents.filter((rent) => rent.id !== rentId));
    setFilteredRents(() => filteredRents.filter((rent) => rent.id !== rentId));
  };

  const sortRents = (value) => {
    if (value === "asc") {
      setFilteredRents((prevRents) =>
        prevRents.toSorted((a, b) => a.price - b.price)
      );
    } else if (value === "desc") {
      setFilteredRents((prevRents) =>
        prevRents.toSorted((a, b) => b.price - a.price)
      );
    }
  };
  const filterRentsByRoomsNumber = (value) => {
    if (value === "all") {
      setFilteredRents(rents);
    } else if (value === "4+") {
      setFilteredRents(
        rents.filter((rent) => parseInt(rent.rooms) >= parseInt(value))
      );
    } else
      setFilteredRents(
        rents.filter((rent) => parseInt(rent.rooms) === parseInt(value))
      );
  };

  return (
    <>
      <header>
        <h2 className="logo">Rent Manager</h2>
      </header>
      <main>
        <AddApartmentForm addRent={addRent} />
        <ApartmentsList
          sortRents={sortRents}
          filterRentsByRoomsNumber={filterRentsByRoomsNumber}
          deleteRent={deleteRent}
          rents={rents}
          filteredRents={filteredRents}
        />
      </main>
    </>
  );
}

export default App;
