import './navbar.scss'


import { HiHome } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='navWrapper'>
          <span><HiHome /></span>
          <h2>PUNE INDUSTRIES</h2>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
          </div>
    </div>
  )
}

export default Navbar