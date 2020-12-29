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
              content="Team Fight"
            />
          </div>
        </div>
        <img src={image} />
      </div>
    </HomePage>
  );
}

export default Home;
