import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import player from '../assets/imgs/home_page_player.png';

const HomePage = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
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
  hr {
    color: #064cd5;
    width: 90%;
  }
  .bottom {
    width: 100%;
    height: 48vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .btns {
      padding: 30px 50px;
      margin: 5em;
      margin-top: 0;
      background-color: #064cd5;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: white;
    }
    .btns:hover {
      cursor: pointer;
    }
  }
`;

function Home() {
  return (
    <HomePage>
      <div className="top">
        <h1>The Football App</h1>
        <img src={player} />
      </div>
      <hr />
      <div className="bottom">
        <Link to="/team/create" className="btns">
          Create Your Team
        </Link>
        <Link to="/" className="btns">
          Fight Two Teams
        </Link>
        <Link to="/" className="btns">
          List of all the Teams
        </Link>
      </div>
    </HomePage>
  );
}

export default Home;
