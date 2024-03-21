import React from 'react'
import './Header.css'
import people from '../../Assets/people/people.png'
import ai from '../../Assets/mask.png'

const Header = () => {
  return (
    <div className="jarvis__header section__padding" id="home">
      <div className="jarvis__header-content">
        <h1 className="gradient__text">Let's Build Something amazing and creative, Everything at one place with  J.A.R.V.I.S.   Gemini AI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum elit vitae ex cursus, a hendrerit ligula facilisis. Sed consequat justo eu nunc tincidunt, vel tincidunt metus pellentesque. Integer facilisis, ligula in commodo euismod, neque odio vestibulum justo, sit amet fermentum nulla felis id elit. In hac habitasse platea dictumst.</p>
        <div className="jarvis__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button"> Get Started!</button>
        </div>
        <div className="jarvis__header-content__people">
           <img src={people} alt="people"/>
           <p>1600 people have requested access a visit in last 24hrs</p>
        </div>
      </div>
      <div className="jarvis__header-image">
        <img src={ai} alt="AI"/>
      </div>
  </div>
  )
}

export default Header
