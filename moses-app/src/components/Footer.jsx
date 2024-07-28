// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Me</h2>
            <p>
              I'm Moses Gitonga, a passionate software engineer and full-stack developer.
              I love creating innovative solutions and helping businesses succeed with technology.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Follow Me</h2>
            <div className="social-icons">
              <a href="https://web.facebook.com/moses.433866" target='_blank'><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/MosesGitonga23" target='_blank'><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/moses-gitonga-591619244/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.github.com/mosesgitonga" target="_blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="footer-section contact">
            <h2>Contact</h2>
            <p>Email: infosec947@gmail.com</p>
            <p>Phone: +254 757 573 241</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Moses Gitonga. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;