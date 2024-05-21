import styled from "styled-components";

export const RentItem = styled.div`
  background: var(--bg-color-fifth);
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  gap: 5px;
  justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      
      div {
        display: flex;
        flex-direction: row;
        span {
          width: fit-content;
        }
      }

      p {
        font-size: 0.9rem;
        margin: 0;
        max-width: 90%;
      }
    }

    h4 {
      margin: 0;
    }

    span {
      margin-right: 10px;
    }

    button {
      background: var(--button-color-red-main);
      height: 45%;
      width: 80px;
      border: none;
      border-radius: 5px;
      height: 50px;
      color: var(--text-color-main);
      font-weight: 600;
    }

    button:hover {
      background: var(--button-color-red-second);
    }
  }

  @media (max-width: 650px) {
    .rent-item{
      flex-direction: column;
      button{
        width: 100%;
        margin-top: 10px;
 
      }
    }
  }
  
`;
