import React from 'react'
import Navbar from './components/userpanel/Navbar/Navbar'
import Hero from './components/userpanel/Hero/Hero'
import Plans from './components/userpanel/Plans/Plans'
import Title from './components/userpanel/Title/Title'
import Contact from './components/userpanel/Contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="mainContainer">
        <Title title = "Explore more" subtitle= "Plans and Pricing"/>
        <Plans/>
        <Title title = "Contact Us" subtitle= "Get in Touch"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App