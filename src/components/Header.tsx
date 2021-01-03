import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <Menu stackable>
      <Menu.Item name="Menu">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item name="All The Teams">
        <Link to="/list">All the Teams</Link>
      </Menu.Item>
      <Menu.Item name="Create Your Team">
        <Link to="/create">Create Your Team</Link>
      </Menu.Item>
      <Menu.Item name="Team Fight">
        <Link to="/fight">Team Fight</Link>
      </Menu.Item>
      <Menu.Item name="Sign In" position="right">
        <GoogleAuth />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
