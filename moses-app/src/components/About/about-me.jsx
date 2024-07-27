// src/components/AboutMe.jsx
import React from 'react';
import './about-me.css';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-content">
        <h1>About Me</h1>
        <p>Hello! I'm Moses Gitonga, a passionate software engineer and full-stack developer skilled in C, Python, JavaScript, SQL, HTML, CSS, React, MongoDB, Docker, SEO, Linux-Bash Scripting, and Redis. I love creating innovative solutions and helping businesses succeed with technology.</p>
        <p>"Turning Ideas into Reality with Code."</p>
        <div className="aboutme-image">
          <img src="your-image-path.jpg" alt="Moses Gitonga" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
