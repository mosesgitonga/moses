import React from 'react';
import './Skills.css';

const skills = {
  programmingLanguages: ['C', 'Python', 'JavaScript'],
  Storage: ['SQL', 'MongoDB', 'Redis'],
  frontendDevelopment: ['HTML', 'CSS', 'React', 'Vanilla JS'],
  backendDevelopment: ['Python Flask','Node.Js ', 'Express.js'],
  devOpsTools: [ 'Git', 'GitHub', 'Docker', 'nginx', 'Linux Bash-Scripting'],
  softwareTesting: ['selenium', 'Postman', 'Swagger'],
  miscellaneous: ['SEO']
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
