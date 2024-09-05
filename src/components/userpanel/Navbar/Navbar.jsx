import React from 'react'
import './Navbar.css'
import logo from '../../../assets/logomain.png'

const Navbar = () => {
  return (
    <nav className='mainContainer'>
        <img src={logo} alt='logo'/>
        <ul>
            <li>Home</li>
            <li>Updates</li>
            <li>About Us</li>
            <li>Plans & Prices</li>
            <li>Testimonials</li>
            <li><button className='mainButton'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar