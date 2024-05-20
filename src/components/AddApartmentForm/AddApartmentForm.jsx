import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StyledApartmentForm } from "./AddApartmentForm.styled";

export default function AddApartmentForm({ addRent }) {
  const newRent = {
    title: "",
    rooms: 1,
    price: 0,
    description: "",
  };

  const [newRentState, setNewRentState] = useState(newRent);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setNewRentState((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newRentWithId = {
      ...newRentState,
      id: uuidv4(),
    };
    addRent(newRentWithId);
    setNewRentState(newRent);
  }

  return (
    <StyledApartmentForm onSubmit={handleSubmit} className="form-wrapper">
      <h3>Create a new rent</h3>
      <hr />
      <div>
        <div className="form-inputs-wrap">
          <div className="form-input form-input-title">
            <label htmlFor="rent-name">Enter Title*</label>
            <input
              id="rent-name"
              type="text"
              placeholder="Wonderful apratment near ther river"
              minLength={5}
              maxLength={55}
              pattern="[a-zA-Z0-9\s\-_]+"
              required
              name="title"
              value={newRentState.title}
              onChange={handleFormInputChange}
            />
          </div>

          <div className="form-input form-input-rooms">
            <label htmlFor="rooms-number">Rooms*</label>
            <input
              id="rooms-number"
              type="number"
              placeholder="1"
              min={1}
              max={999999}
              required
              name="rooms"
              value={newRentState.rooms}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="form-input form-input-price">
            <label htmlFor="form-price">Price*</label>
            <input
              id="form-price"
              type="number"
              placeholder="1"
              min={1}
              max={999999}
              required
              name="price"
              value={newRentState.price}
              onChange={handleFormInputChange}
            />
          </div>
        </div>
        <div className="form-input ">
          <label htmlFor="form-description">Description </label>
          <textarea
            id="form-description"
            type="text"
            placeholder="Write a short description for your rental object"
            name="description"
            value={newRentState.description}
            onChange={handleFormInputChange}
          />
        </div>

        <button>SUBMIT</button>
      </div>
    </StyledApartmentForm>
  );
}
