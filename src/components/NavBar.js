import React from 'react';
import {NavLink, Link } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '10px',
  margin: '0 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'
        exact
        style={link}
        activeStyle={{
          background: 'lightgrey'
        }}
      >Home</NavLink>
      <NavLink to='/movies'
        exact
        style={link}
        activeStyle={{
          background: 'lightgrey'
        }}
      >Movies</NavLink>
      <NavLink to='/directors'
        exact
        style={link}
        activeStyle={{
          background: 'lightgrey'
        }}
      >Directors</NavLink>
      <NavLink to='/actors'
        exact
        style={link}
        activeStyle={{
          background: 'lightgrey'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
