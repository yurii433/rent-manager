import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { StyledApartmentForm } from "./AddApartmentForm.styled";

export default function AddApartmentForm({ addRent }) {
  const [error, setError] = useState({
    price: "",
    name: "",
    room: "",
    description: "",
  });

  const newRent = {
    title: "",
    rooms: "",
    price: "",
    description: "",
  };

  const [newRentState, setNewRentState] = useState(newRent);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;

    const aphabeticPattern = /^[a-zA-Z0-9\s\-_А-Яа-яІЇЄієїҐґ]*$/; // input validation pattern for name and description
    const numericPattern = /^0\d+/; //input validation pattern for price and rooms

    let errorMessage = "";

    if (
      (name === "title" || name === "description") &&
      !aphabeticPattern.test(value)
    ) {
      errorMessage = `${name} can only contain letters, numbers, spaces, hyphens, and underscores.`;
    } else if (name === "rooms" || name === "price") {
      if (numericPattern.test(value)) {
        errorMessage = `${name} cannot have leading zeros.`;
      } else if (isNaN(value)) {
        errorMessage = `${name} must be a number`;
      }
    }

    setError((prevState) => ({ ...prevState, [name]: errorMessage }));

    if (!errorMessage) {
      setNewRentState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    // we can move validation process here so errors will be showed when the user clicks the submit button,
    // but in this setup I choose just not to let the user inputting incorrect data.
    // Instead, error notice text is showed on the screen immediatelly.

    const newRentWithId = {
      ...newRentState,
      id: uuidv4(),
    };
    addRent(newRentWithId);
    setNewRentState(newRent);
  }

  return (
    <StyledApartmentForm onSubmit={handleSubmit} className="form-wrapper">
      <h3>Create a new rent 🏠 ➕</h3>
      <hr />
      <div>
        <div className="form-inputs-wrap">
          <div className="form-input form-input-big">
            <label htmlFor="rent-name">Enter Title*</label>
            <input
              id="rent-name"
              type="text"
              placeholder="Wonderful apratment near ther river"
              minLength={1}
              maxLength={99}
              pattern="[a-zA-Z0-9\s\-_А-Яа-я]+"
              required
              name="title"
              value={newRentState.title}
              onChange={handleFormInputChange}
            />{" "}
            <p className="error-message">{error.title} </p>
          </div>

          <div className="form-input form-input-small">
            <label htmlFor="rent-rooms">Rooms*</label>
            <input
              id="rent-rooms"
              type="number"
              placeholder="1"
              min={1} // Minimal amount of rooms shall be 1
              step="0.5" // At the same time, we allow values like 1.5 rooms or 3.5 rooms which is common in real estate market (meanwhile 0.5 is not)
              required
              name="rooms"
              value={newRentState.rooms}
              onChange={handleFormInputChange}
            />

            <p className="error-message">{error.rooms}</p>
          </div>
          <div className="form-input form-input-small">
            <label htmlFor="form-price">Price*</label>
            <input
              id="form-price"
              type="number"
              placeholder="1"
              min={0.01} // Minimal price shall be > 0, but it also cannot be less than 1 cent / 1 kopeck / etc.
              step="0.01" // Allowing decimals for values like $99.99 per night
              required
              name="price"
              value={newRentState.price}
              onChange={handleFormInputChange}
            />

            <p className="error-message">{error.price}</p>
          </div>
        </div>

        <div className="form-input ">
          <label htmlFor="form-description">Description </label>
          <textarea
            id="form-description"
            type="text"
            placeholder="Write a short description for your rental object"
            name="description"
            pattern="[a-zA-Z0-9\s\-_]+"
            maxLength={999}
            value={newRentState.description}
            onChange={handleFormInputChange}
          />
          <p className="error-message">{error.description}</p>
        </div>
        <button>SUBMIT</button>
      </div>
    </StyledApartmentForm>
  );
}
