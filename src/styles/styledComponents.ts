import styled from 'styled-components';
import pitch from '../assets/imgs/3dsection.png';

export const Grid = styled.div`
  width: 70%;
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