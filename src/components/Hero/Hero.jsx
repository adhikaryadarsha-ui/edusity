import React from 'react'
import './Hero.css';
import arrow_icon from '../../assets/white-arrow.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="btn exp-btn">
            Explore more <img src={arrow_icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
