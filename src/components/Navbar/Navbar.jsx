import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.png';
import './Navbar.css'

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#possibility">Gemini AI</a></p>
    <p><a href="#mfeatures">Case studies</a></p>
    <p><a href="#blog">Library</a></p>
    <p><a href="#Ijarvis">What is JARVIS?</a></p>
    <p><a href="#price">Pricing</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jarvis__navbar">
      <div className="jarvis__navbar-links">
        <div className="jarvis__navbar-links__logo">
          <img src={logo} alt="logog" />
        </div>
        <div className="jarvis__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="jarvis__navabar-sign">
        <p>sign in</p>
        <button type="button">sign up</button>
      </div>

      <div className="jarvis__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="jarvis__navbar-menu_container scale-up-center">
            <div className="jarvis__navbar-menu_container-links">
              <Menu />
              <div className="jarvis__navbar-menu_containers-links-sign">
                <p>sign in</p>
                <button type="button">sign up</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar
