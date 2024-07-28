import React from 'react';
import './Intro.css';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="intro-text">
        <h1>Hello, I'm a Freelance Software Engineer</h1>
        <p>Turning ideas into code</p>
      </div>
      <div className="intro-image">
        <img src="moses.jpg" alt="Your Name" />
      </div>
    </div>
  );
};

export default Introduction;