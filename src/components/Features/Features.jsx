import React from 'react'
import './Features.css'
const Features = ({title,text}) => {
  return (
    <div className="jarvis__features-container__feature">
      <div className="jarvis__features-container__feature-title">
            <div/>
            <h1>{title}</h1>
      </div>
      <div className="jarvis__features-container__feature-text">
           <p>{text}</p>
      </div>
    </div>
  )
}

export default Features
