import React from 'react';

const skillsData = [
  { category: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS/Sass"] },
  { category: "Backend", items: ["Spring Boot", "Java", "Node.js", "Express"] },
  { category: "Database & Tools", items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"] },
];

function Skills() {
  return (
    // 배경색: bg-night-sky, 텍스트색: text-sand-light
    <section id="skills" className="py-16 px-4 sm:px-8 **bg-night-sky** **text-sand-light** min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        
        {/* 제목: border-sunset, text-sand-light */}
        <h2 className="text-4xl font-extrabold **text-sand-light** mb-4 border-b-4 **border-sunset** pb-2 inline-block">
          기술 오아시스 (Skills Oasis)
        </h2>
        
        {/* 설명: text-sand-main */}
        <p className="**text-sand-main** mb-12 text-lg">
          제가 개발 여정에서 확보하고 활용하는 핵심 기술과 도구들입니다.
        </p>

        {/* 스킬 그룹 컨테이너: 반응형 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 skills-container">
          {skillsData.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              // 카드 배경: bg-sand-dark, 경계선: border-sunset
              className="skill-group **bg-sand-dark** p-6 rounded-xl shadow-lg border **border-sunset/50**"
            >
              {/* 그룹 제목: text-sand-main, 경계선: border-sand-dark */}
              <h3 className="text-2xl font-bold **text-sand-main** mb-4 border-b **border-sand-dark** pb-2">
                {skillGroup.category}
              </h3>
              
              {/* 스킬 리스트 */}
              <div className="flex flex-wrap gap-3 skill-list">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    // 태그 스타일: 배경-sunset/20, 텍스트-sunset
                    className="skill-tag px-4 py-2 text-sm font-semibold **bg-sunset/20** **text-sunset** rounded-full shadow-md hover:**bg-sunset** hover:**text-sand-light** transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;