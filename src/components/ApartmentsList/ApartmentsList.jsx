import { RentItem } from "./RentItem.styled";

import { SortingEl } from "./SortingEl.styled";

const ApartmentsList = ({
  sortRents,
  filterRentsByRoomsNumber,
  deleteRent,
  filteredRents,
  rents,
}) => {
  return (
    <div className="form-wrapper">
      <h3>Availiable apratments ({rents.length})</h3>
      <SortingEl>
        <select name="" id="" onChange={(e) => sortRents(e.target.value)}>
          <option value="" defaultValue hidden>
            Sort by{" "}
          </option>
          <option value="desc">Price - highest to lowest </option>
          <option value="asc">Price - lowest to highest</option>
        </select>
        <div className="filtering-el">
          <select
            name=""
            id=""
            onChange={(e) => filterRentsByRoomsNumber(e.target.value)}
          >
            <option value="" defaultValue hidden>
              Rooms{" "}
            </option>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>
      </SortingEl>
      <hr />
      {filteredRents.map((rent) => {
        return (
          <RentItem key={rent.id}>
            <div>
              <h4>{rent.title}</h4>
              <div>
                <span className="rent-feature">${rent.price} per night</span>
                <span className="rent-feature">
                  {rent.rooms} {rent.rooms === 1 ? `room` : `rooms`}
                </span>
              </div>

              <p>{rent.description}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={() => deleteRent(rent.id)}>Delete</button>
            </div>
          </RentItem>
        );
      })}
      <button onClick={() => localStorage.clear()}>Clear local storage</button>
    </div>
  );
};

export default ApartmentsList;
