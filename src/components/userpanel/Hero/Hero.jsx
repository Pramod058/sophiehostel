import React from 'react'
import './Hero.css'
import arrow_icon from '../../../assets/arrow-icon.png'

const Hero = () => {
  return (
    <div className='hero mainContainer'>
        <div className="hero-text">
            <h1>Welcome to Sophie Girls Hostel</h1>
            <p>We provide the best facilities for students and working women in a safe and comfortable environment.</p>
            <button className='mainButton'>Explore more <img src={arrow_icon} alt="arrow"/> </button>
        </div>
    </div>
  )
}

export default Hero