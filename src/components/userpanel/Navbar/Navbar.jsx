import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../../assets/logomain.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })

  }, [])

  return (
    <nav  className={`mainContainer ${sticky ? 'dark-nav' : ''}  `}>
     <Link to='hero' smooth={true} offset={0} duration={500}> <img src={logo} alt='logo' /></Link>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='' smooth={true} offset={0} duration={500}>Updates</Link></li>
        <li><Link to='' smooth={true} offset={0} duration={500}>About Us</Link></li>
        <li><Link to='plans' smooth={true} offset={-160} duration={500}>Plans & Pricing</Link></li>
        <li><Link to='' smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-220} duration={500} className='mainButton'>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar