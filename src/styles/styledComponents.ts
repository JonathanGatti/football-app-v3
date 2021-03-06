import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';
import {mediaQueries} from './mediaQueries';

export const AppContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  color: #140159;
  width: 90vw;
  height: 90vh;
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
  @media ${mediaQueries.laptop}{
    width: 30vw;
  }
`;

export const PlayerCardContainer = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: lightgray;
  img {
    width: 100px;
    height: 80px;
  }
`;

export const HomePage = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  @media ${mediaQueries.tablet} {
    .header {
      flex-wrap: wrap;
    flex-direction: column;
    }
    img {
      flex:1;
      margin-top: 1em;
    }
    .buttons {
      max-width: 50px;
      max-height: 60px;
    }
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  @media ${mediaQueries.laptop}{
  flex-direction: column;
}
`

export const TeamFormContainer = styled.div`
  background-color: rgba(2, 5, 47, 0.85);
  color: white;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70vh;
  padding-top: 2em;
  padding-bottom: 1em;
  padding-left: 0.4em;
  border-radius: 15px;
  .label {
    max-width: 90%;
    margin-top: 0.6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    margin: auto;
    max-width: 40%;
    max-height: 40%;
  }
  @media ${mediaQueries.laptop}{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${mediaQueries.tablet}{
    width: 80%;
  }
`;

export const TeamStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 2em;
  width: 25%;
  height: 70vh;
  border-radius: 20px;
  img {
    max-width: 60%;
    max-height: 60%;
  }
  @media ${mediaQueries.laptop}{
    width: 80%;
  }
`;

export const TeamFightContainer = styled.div`
  display: flex;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .list {
    width: 65%;
    max-height: 70vh;
    overflow: scroll;
  }
  .btns {
    align-self: flex-end;
  }
  @media ${mediaQueries.laptop}{
    flex-direction: column;
    .list {
      width: 90%;
      margin-bottom: 1em;
      margin-left: auto;
      margin-right: auto;
    } 
    .content {
      flex-direction: column;
    }
  }
`;