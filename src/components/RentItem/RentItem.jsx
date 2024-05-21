import { RentItem as StyledRentItem } from "./RentItem.styled";

const RentItem = ({ rent, deleteRent }) => {
  return (
    <StyledRentItem className="rent-item">
      {" "}
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
    </StyledRentItem>
  );
};

export default RentItem;
