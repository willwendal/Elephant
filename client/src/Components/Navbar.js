import './Navbar.scss'
import navbarElephantLogo from '../Navbar-elephant-logo.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo-slogan-container'>
        <img src={navbarElephantLogo} alt='elephant logo' />
        <p className='navbar-slogan'>Never Forget</p>
      </div>
      <div className='navbar-navlinks'>
        <NavLink to='/Addevents'>Add Events</NavLink>
        <dt>|</dt>
        <NavLink to='/Myevents'>My Events</NavLink>
      </div>
    </div>
  )
}

export default Navbar
