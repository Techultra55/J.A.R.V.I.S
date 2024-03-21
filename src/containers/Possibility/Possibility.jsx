import React from 'react'
import './Possibility.css'
import posImg from '../../Assets/mask2.png'

const Possibility = () => {
  return (
    <div className="jarvis__possibility section__margin" id="possibility">
      <div className="jarvis__possibility-image">
        <img src={posImg} alt="possibilty" />
      </div>
      <div className="jarvis__possibility-content">
        <h4>Request for early access</h4>
        <h1 className="gradient__text">The possibilities are beyond the expectations</h1>
        <p>Generative AI is a powerful technology that can create realistic images, write engaging text, and convert text into natural speech, revolutionizing content creation and personalization across various applications.</p>
        <h4>Limited number of tokens remaining , get started now</h4>
      </div>
    </div>
  )
}

export default Possibility
