import React from 'react';
import '../CSS/About.css'
import about from '../../Images/about.png'

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-content">
        <h2>Mission</h2>
        <p>To provide quality consultancy and training services to clients</p>
        <h2>Vision</h2>
        <p>To be the market leader in the provision of excellent consultancy and training services </p>
        <h2>Core Values</h2>
        <p>Our core values are:Passionate, Professionalism,integrity,Ethical practices,Continuous improvement,Innovative  and Efficiency 
  </p>
        <h2>Purpose</h2>
        <p>To provide solutions to corporate problems affecting organizations at National and International level</p>
      </div>
      <div className="about-image">
        <img className='about-bg-image' src={about} alt="About us" />
      </div>
    </div>
    </>
  );
};

export default About;