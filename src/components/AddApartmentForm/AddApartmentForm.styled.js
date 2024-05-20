import styled from "styled-components";

export const StyledApartmentForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: var(--bg-color-third);

  h3 {
    align-self: flex-start;
    margin: 0;
  }

  h4 {
    display: inline;
  }

  hr {
    width: 100%;
    border: 1px solid var(--bg-color-fifth);
  }

  button {
    margin: 5px 0;
    padding: 10px;
    width: 100%;
    max-width: 600px;
    font-weight: 700;
    color: var(--text-color-second);
    border: 1px solid var(--bg-color-fifth);
    background-color: var(--button-color);
    color: var(--text-color-main);
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--button-color-hover);
  }

  button:focus {
    background-color: var(--bg-color-third);
    color: var(--text-color-third);
  }

  select {
    background-color: var(--bg-color-fifth);
    margin: 5px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
`;
