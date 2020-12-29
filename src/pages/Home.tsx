import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import image from '../assets/imgs/home_page_img.png';

const HomePage = styled.div`
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

function Home() {
  return (
    <HomePage>
      <div className="header">
        <div className="text">
          <h1>The Football App</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nihil odit molestias! Laborum, voluptatibus quis dolorum tenetur
            asperiores dignissimos error nihil ut in fugit ad quibusdam id
            perspiciatis nesciunt delectus.
          </h3>
          <div className="buttons">
            <Button
              as={Link}
              to="team/create"
              attached="bottom"
              content="Create Your Team"
            />
            <Button
              as={Link}
              to="/list"
              attached="bottom"
              content="List of All The Teams"
            />
            <Button
              as={Link}
              to="/fight"
              attached="bottom"
              content="Teams Fight"
            />
          </div>
        </div>

        <img src={image} />
      </div>
    </HomePage>
  );
}

export default Home;
