import React from 'react'
import './Aboutus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBed, faUtensils, faWifi, faShieldAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
const Aboutus = () => {
  return (
    <div className='aboutus' name='aboutus'>
        <div className="col-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta ipsa, quibusdam voluptatum veritatis optio ut nisi, expedita minima magnam obcaecati. Et omnis placeat architecto fuga id error nostrum esse!</div>
        <div className="col-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ratione deserunt obcaecati harum, consequatur cumque, odit eveniet autem, neque beatae dolor assumenda esse ut facere illum explicabo soluta quo ipsa!
        Nostrum pariatur esse ipsa illo facilis consequuntur soluta laudantium ducimus, sit sint explicabo voluptatibus, quos maiores at tenetur non. Laboriosam eligendi nemo asperiores, a eos rem soluta facere consectetur mollitia?
        </div>
        <br/>
        <section id="offers">
        <h2>What We Offer?</h2>
        <div className="offerings">
          <div className="offering">
            <FontAwesomeIcon icon={faBed} size="3x" className="icon"/>
            <h4>Room</h4>
            <p>7/35 Beds</p>
          </div>
          <div className="offering">
            <FontAwesomeIcon icon={faUtensils} size="3x" className="icon"/>
            <h4>Food</h4>
            <p>Good Diet Plan</p>
          </div>
          <div className="offering">
            <FontAwesomeIcon icon={faWifi} size="3x" className="icon"/>
            <h4>Wifi</h4>
            <p>Internet Connection</p>
          </div>
          <div className="offering">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" className="icon"/>
            <h4>Security</h4>
            <p>Secured</p>
          </div>
          <div className="offering">
            <FontAwesomeIcon icon={faWallet} size="3x" className="icon"/>
            <h4>Budget</h4>
            <p>Budget Friendly</p>
          </div>
        </div>
      </section>

        </div>
  )
}

export default Aboutus