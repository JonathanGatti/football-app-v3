import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
  margin-top: 0;
  display: flex;
  background-color: #064cd5;
  font-size: 22px;
  height: 6vh;
  width: 100vw;
  align-items: center;
  button {
    margin-left: auto;
    margin-right: 1em;
    background-color: #df3b15;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
  }
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
        <Link className="link" to="/team/create">
          Create A New Team
        </Link>
      </div>
      <button>Log In</button>
    </Navbar>
  );
};

export default Header;
