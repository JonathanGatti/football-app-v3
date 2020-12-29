import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';

export const AppContainer = styled.div`
  color: rgba(2, 5, 47, 0.75);
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: #140159;
  width: 90vw;
  height: 100vh;
`;

export const Grid = styled.div`
  width: 98%;
  height: 70vh;
  background-image: url(${pitch});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;


export const PlayerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayerInfoContainer = styled.div`
  width: 10vw;
  z-index: 10;
  position: absolute;
  .card {
    display: flex;
    flex-direction: column;
  }
`;

export const PlayerCardContainer = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 80px;
  }
`;

export const HomePage = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .text {
      width: 50%;
      .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 2em;
        flex-basis: 33%;
      }
    }
    img {
      max-width: 50%;
      max-height: 65vh;
      border-radius: 30px;
    }
  }
`;