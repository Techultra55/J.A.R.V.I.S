import React from 'react'
import './Team.css'
import { img1 } from './import';

const Team = () => {

  const teamMembers = [
    { name: 'David Fernandes', role: 'AI specialist', image: 'path/to/john-doe.jpg' },
    { name: 'Swizel dias sapeco', role: 'Features Developer', image: 'path/to/jane-smith.jpg' },
    { name: 'Shubhang Rege', role: 'web Developer', image: img1 },
    { name: 'Tanya Redkar', role: 'Docs Expert', image: 'path/to/bob-brown.jpg' },
 ];

  return (
    <div className="jarvis__dev-section section__padding">
      <h1 className="gradient__text">Meet Our Team</h1>
      <div className="jarvis__dev-section__team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="jarvis__dev-section__team-card">
            <img src={member.image} alt={member.name} className="jarvis__dev-section__team-image" />
            <h3 className="gradient__text">{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
