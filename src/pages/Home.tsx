import React from 'react';
import styled from 'styled-components';
import player from '../assets/imgs/home_page_player.png';

const HomePage = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightcoral;
    h1 {
      color: #212020;
      font-weight: 500;
      font-size: 38px;
      letter-spacing: 2px;
    }
    img {
      max-width: 60vw;
      max-height: 40vh;
      margin-left: 28em;
      margin-top: 3em;
    }
  }
  .bottom {
    width: 100%;
    height: 50vh;
    background-color: lightblue;
  }
`;

function Home() {
  return (
    <HomePage>
      <div className="top">
        <h1>The Football App</h1>
        <img src={player} />
      </div>
      <div className="bottom"></div>
    </HomePage>
  );
}

export default Home;
