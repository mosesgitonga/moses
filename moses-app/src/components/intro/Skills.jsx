import React from 'react';
import './Skills.css';

const skills = [
  'C', 'Python', 'JavaScript', 'SQL','MongoDB', 'HTML', 'CSS', 'React', 'nginx', 'Docker Containerization', 'SEO', 'Linux-Bash Scripting', 'Redis'
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1>My Skills</h1>
        <p>As a full-stack developer, I am proficient in a wide range of technologies and tools that enable me to build comprehensive and efficient applications. Here is a summary of my technical skills:</p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
