import React from 'react'
import Navbar from './components/userpanel/Navbar/Navbar'
import Hero from './components/userpanel/Hero/Hero'
import Plans from './components/userpanel/Plans/Plans'
import Title from './components/userpanel/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="mainContainer">
        <Title title = "Explore more" subtitle= "Plans and Pricing"/>
        <Plans/>
      </div>
    </div>
  )
}

export default App