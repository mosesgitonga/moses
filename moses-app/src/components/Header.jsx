// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
      <nav className="nav">
        <a href="/" className="logo">Moses Gitonga</a>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div id="menu" className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="#" className="menu-item">Home</a>
          <a href="#about" className="menu-item">About</a>
          <a href="#services" className="menu-item">Services</a>
          <a href="#contact" className="menu-item">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
