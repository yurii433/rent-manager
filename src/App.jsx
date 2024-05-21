import { useState, useEffect } from "react";
import { defaultData as defaultRents } from "./defaultData";

import AddApartmentForm from "./components/AddApartmentForm/AddApartmentForm";
import ApartmentsList from "./components/ApartmentsList/ApartmentsList";

import "./App.css";

function App() {
  const [rents, setRents] = useState(
    JSON.parse(localStorage.getItem("localRents")) || defaultRents
  );

  const [filteredRents, setFilteredRents] = useState(rents);

  useEffect(() => {
    localStorage.setItem("localRents", JSON.stringify(rents));
  }, [rents]);

  const addRent = (newRent) => {
    console.log(newRent);
    setFilteredRents((prevRents) =>
      prevRents ? [...prevRents, newRent] : [newRent]
    );
    setRents((prevRents) => (prevRents ? [...prevRents, newRent] : [newRent]));
  };

  const deleteRent = (rentId) => {
    setRents(() => rents.filter((rent) => rent.id !== rentId));
    setFilteredRents(() => filteredRents.filter((rent) => rent.id !== rentId));
  };

  const sortRentsByPrice = (value) => {
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
          sortRents={sortRentsByPrice}
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
