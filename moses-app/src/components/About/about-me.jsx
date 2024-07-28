// src/components/AboutMe.jsx
import React from 'react';
import './about-me.css';

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-container">
      <div className="aboutme-content">
        <h1>About Me</h1>
        <p>I’m a passionate software engineer dedicated to crafting stunning websites that empower businesses and individuals to thrive online.</p>
        <p>With a focus on full stack web development, I bring ideas to life through clean and efficient code. I believe in collaboration and open communication, ensuring that your vision is at the heart of every project. My goal is to not only meet your expectations but to exceed them. Whether youʼre a startup looking to establish your online presence or an established business aiming to revamp your website, Iʼm here to help you succeed. Together, we can create something amazing that truly stands out in the digital world!</p>
        <div className="aboutme-image">
          <img src="your-image-path.jpg" alt="Moses Gitonga" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
