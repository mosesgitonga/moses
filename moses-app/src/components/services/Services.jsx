// src/components/Services.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './services.css';

const services = [
  { title: 'Full-Stack Web Development', description: 'Development of both frontend and backend applications using React, Flask, and other technologies.' },
  { title: 'Web Application Development', description: 'Developing complex web applications with interactive features.' },
  { title: 'API Development and Integration', description: 'Building and integrating RESTful APIs for seamless data exchange.' },
  { title: 'Custom Software Development', description: 'Building tailored software solutions for specific business needs.' },
  { title: 'Database Design and Management', description: 'Designing and managing databases using SQL or NoSQL solutions.' },
  { title: 'DevOps and CI/CD', description: 'Implementing Continuous Integration and Continuous Deployment pipelines.' },
  { title: 'SEO Consulting', description: 'Improving search engine rankings through SEO strategies.' },
  { title: 'Website Maintenance', description: 'Providing updates, backups, and security patches for websites.' },
];

const Services = () => {
  return (
    <div id='services' className="services-container">
      <div className="services-content">
        <h1>My Services</h1>
        <p>Explore the range of services I offer to meet your business needs.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-overlay">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-whatsapp">
          <a href="https://wa.me/254757573241" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
