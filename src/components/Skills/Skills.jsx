import React from 'react';
import './Skills.css'; 

const skillsData = [
  { category: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS/Sass"] },
  { category: "Backend", items: ["Spring Boot", "Java", "Node.js", "Express"] },
  { category: "Database & Tools", items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"] },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>기술 오아시스 (Skills Oasis)</h2>
      <p className="section-description">
        제가 개발 여정에서 확보하고 활용하는 핵심 기술과 도구들입니다.
      </p>

      <div className="skills-container">
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.category} className="skill-group">
            <h3>{skillGroup.category}</h3>
            <div className="skill-list">
              {skillGroup.items.map((skill) => (
                // 각 스킬 태그에 사막 테마 적용
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;