import RentItem from "../RentItem/RentItem";

import { SortingEl as StyledSortingEl } from "./SortingEl.styled";

const ApartmentsList = ({
  sortRents,
  filterRentsByRoomsNumber,
  deleteRent,
  filteredRents,
  rents,
}) => {
  return (
    <div className="form-wrapper">
      {" "}
      {rents.length === 0 ? (
        <h3>There are no apartments availiable 🏢</h3>
      ) : rents.length === 1 ? (
        <h3>There is {rents.length} availiable apartment 🏢</h3>
      ) : (
        <h3>There are {rents.length} availiable apartments 🏢 </h3>
      )}
      <StyledSortingEl>
        <select name="sorting-el" onChange={(e) => sortRents(e.target.value)}>
          <option value="" defaultValue hidden>
            Sort by{" "}
          </option>
          <option value="desc">Price - highest to lowest </option>
          <option value="asc">Price - lowest to highest</option>
        </select>
        {rents > filteredRents && (
          <span className="fitered-to-all">
            {" "}
            {filteredRents.length} / {rents.length}
          </span>
        )}
        <div className="filtering-el">
          <select
            name=""
            id=""
            onChange={(e) => filterRentsByRoomsNumber(e.target.value)}
          >
            <option value="" defaultValue hidden>
              Rooms{" "}
            </option>
            <option value="all">All </option>
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
            <option value="3">3 rooms</option>
            <option value="4+">4+ rooms</option>
          </select>
        </div>
      </StyledSortingEl>
      <hr />
      {filteredRents.map((rent) => {
        return (
          <RentItem
            key={rent.id}
            rent={rent}
            deleteRent={deleteRent}
          ></RentItem>
        );
      })}
      {/* only for test purposes
      <button onClick={() => localStorage.clear()}>
        Clear local storage
      </button>{" "} */}
    </div>
  );
};

export default ApartmentsList;
