import React from 'react'
import './Contact.css'
import msg_icon from '../../../assets/msg-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import phone_icon from '../../../assets/phone-icon.png'
import location_icon from '../../../assets/location-icon.png'
import arrow_icon from '../../../assets/arrow-icon.png'
const Contact = () => {
  return (
    <div className="contact" name="contact">
        <div className="contact-col"            >
            <h3> Send us a message <img src={msg_icon} alt= 'msg_icon'/></h3>
            <p>We’re here to help! Whether you have questions about our hostel, need assistance with a booking, or just want to say hello, feel free to reach out to us. We’d love to hear from you!</p>
            <ul>
                <li><img src={mail_icon} alt='mail'/> contact@gmail.com</li>
                <li><img src={phone_icon} alt='phone'/> +977 9824036966</li>
                <li> <img src={location_icon} alt='location'/> Buddhanagar - 10, Sankhamul <br/>44600, Kathmandu</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows={6} placeholder='Enter your message' required/>
                <button type='submit' className='mainButton  pink-btn'>Submit now <img src={arrow_icon}/></button>
           
            </form>
        </div>
    </div>
  )
}

export default Contact