import React from 'react';
import './Skills.css';

const skills = {
  programmingLanguages: ['C', 'Python', 'JavaScript', 'SQL'],
  frontendDevelopment: ['HTML', 'CSS', 'React'],
  backendDevelopment: ['Python', 'SQL', 'MongoDB', 'nginx'],
  devOpsTools: ['Docker Containerization', 'nginx', 'Linux-Bash Scripting'],
  miscellaneous: ['SEO', 'Redis', 'Web Technologies', 'Web Scrapping', 'Software Testing']
};

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1>My Skills</h1>
        <p>As a full-stack developer, I am proficient in a wide range of technologies and tools that enable me to build comprehensive and efficient applications. Here is a summary of my technical skills:</p>
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index}>
            <h2>{category.replace(/([A-Z])/g, ' $1')}</h2>
            <ul className="skills-list">
              {skillList.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
