import React from 'react';
import './Brand.css';
import { Gemini, Midjourney, OpenAi, ClipDrop } from './import';

const Brand = () => {
  return (
    <div className="jarvis__brand section__padding">
      <div>
        <img src={Gemini} alt="Google gemini" />
      </div>
      <div>
        <img src={Midjourney} alt="Midjourney" />
      </div>
      <div>
        <img src={OpenAi} alt="openAi" />
      </div>
      <div>
        <img src={ClipDrop} alt="Clip" />
      </div>
    </div>
  )
}

export default Brand
