import React from 'react';
import { NavLink } from 'react-router-dom';


const Link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}


const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        style={Link}
        activeStyle={{
        background: 'darkblue'
        }}
        >Home</NavLink>
      <NavLink
        to='/actors'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Actors</NavLink>
      <NavLink
        to='/directors'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Directors</NavLink>
      <NavLink
        to='/movies'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Movies</NavLink>

    </div>
  );
};

export default NavBar;
