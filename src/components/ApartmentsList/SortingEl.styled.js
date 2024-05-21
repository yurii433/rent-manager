import styled from "styled-components";

export const SortingEl = styled.div`
  display: flex;
  justify-content: space-between;
  .filtering-el {
    display: flex;
    align-items: center;
  }
  select {
    background-color: var(--bg-color-fifth);
    margin: 5px 0;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  .fitered-to-all {
    font-family: sans-serif;
    font-weight: 600;
    font-size: small;
    margin: 0 auto;
    align-self: center;
    text-align: end;
    margin-right: 20px;
    background: var(--bg-color-fifth);
    padding: 5px;
    border-radius: 5px;
  }
`;
