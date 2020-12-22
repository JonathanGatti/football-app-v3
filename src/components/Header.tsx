import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import styled from 'styled-components';

const Navbar = styled.div`
  margin-top: 0;
  display: flex;
  background-color: #064cd5;
  font-size: 22px;
  height: 6vh;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  .links {
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
  .link {
    text-decoration: none;
    color: white;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/teams">
          Your Teams
        </Link>
      </div>
      <GoogleAuth />
    </Navbar>
  );
};

export default Header;
