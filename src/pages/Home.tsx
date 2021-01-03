import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import image from '../assets/imgs/home_page_img.png';
import { HomePage } from '../styles/styledComponents';

function Home() {
  return (
    <HomePage>
      <div className="header">
        <div className="text">
          <h1>The Football App</h1>
          <h3>
            Create your dream teams and make it compete against to see which is
            best
          </h3>
          <div className="buttons">
            <Button
              as={Link}
              to="/create"
              attached="bottom"
              content="Create Your Team"
            />
            <Button
              as={Link}
              to="/list"
              attached="bottom"
              content="List The Teams"
            />
            <Button
              as={Link}
              to="/fight"
              attached="bottom"
              content="Team Fight"
            />
          </div>
        </div>
        <img src={image} alt="home page" />
      </div>
    </HomePage>
  );
}

export default Home;
