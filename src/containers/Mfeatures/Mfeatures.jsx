import React from 'react'
import './Mfeatures.css'
import { Features } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
  },
  {
    title: 'Became the tenedd active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
  },
  {
    title: 'Message or an everydhh',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
  },
  {
    title: 'Really old school boy',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
  },
];


const Mfeatures = () => {
  return (
    <div className="jarvis__mfeatures section__padding" id="mfeatures">
      <div className="jarvis__mfeatures-heading">
        <h1 className="gradient__text">Your all in one stop , step in , Increase productivity and decrease time.</h1>
        <p>Get the access now! Sign-up.</p>
      </div>
      <div className="jarvis__mfeatures-container">
         {featuresData.map((item,index)=>(
           <Features title={item.title} text={item.text} key={item.title + index} />
         ))}
      </div>
    </div>
  )
}

export default Mfeatures