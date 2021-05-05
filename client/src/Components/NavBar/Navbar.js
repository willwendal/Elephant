import './Navbar.scss';
import React, { FunctionComponent } from "react";
import navbarElephantLogo from '../../assets/Navbar-elephant-logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo-slogan-container'>
        <img src={navbarElephantLogo} alt='elephant logo' />
        <p className='navbar-slogan'>Never Forget</p>
      </div>
      <div className='navbar-navlinks'>
        <NavLink data-testid='addEvents' className='nav-link' to='/Addevents'>Add Events</NavLink>
        <dt>|</dt>
        <NavLink data-testid='myEvents' className='nav-link' to='/Myevents'>My Events</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
