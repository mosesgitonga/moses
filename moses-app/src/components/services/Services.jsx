// src/components/Services.jsx
import React from 'react';
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
  // Extend the services array to ensure continuous scrolling
  const extendedServices = [...services, ...services];

  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>Explore the range of services we offer to meet your business needs.</p>
        <div className="services-list-wrapper">
          <div className="services-list">
            {extendedServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-overlay">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
