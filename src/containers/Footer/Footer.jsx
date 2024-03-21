import React from 'react'
import './Footer.css'
import Jlogo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <div className="jarvis__footer section__padding">
      <div className="jarvis__footer-heading">
        <h1 className="gradient__text">Whome to wait now? grab the services now!</h1>
      </div>

      <div className="jarvis__footer-btn">
        <p>Click Here to Grab</p>
      </div>

      <div className="jarvis__footer-links">
        <div className="jarvis__footer-links_logo">
          <img src={Jlogo} alt="logo" />
          <p>Just A Rather Very Intelligent System</p>
        </div>
        <div className="jarvis__footer-links_div">
          <h4>Links</h4>
          <p>Social media</p>
          <p>Contact</p>
          <p>Github</p>
          <p>Hugging face</p>
          <p>Gcollab</p>
        </div>

        <div className="jarvis__footer-links_div">
          <h4>Project Rights</h4>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <p>contact</p>
        </div>

        <div className="jarvis__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Dept of CS</p>
          <p>St xavier's college</p>
        </div>
      </div>
      <div className="jarvis__footer-copyright">
          <p>Copyright © 2024 J.A.R.V.I.S. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
