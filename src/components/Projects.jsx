// src/components/Projects.jsx

import React from 'react';
import './Projects.css'; // 새로 만들 CSS 파일 불러오기

// 프로젝트 데이터를 배열로 관리합니다. (임시 데이터)
const projectData = [
  { id: 1, title: "React To-Do App (A)", description: "Hooks와 Redux를 활용한 상태 관리 연습 프로젝트.", tags: ["React", "Redux", "SCSS"], githubUrl: "#" },
  { id: 2, title: "Spring Boot API (B)", description: "JWT 인증을 구현한 RESTful 백엔드 API.", tags: ["Spring Boot", "JPA", "MySQL"], githubUrl: "#" },
  { id: 3, title: "Portfolio Web Site (C)", description: "개인 포트폴리오 웹사이트 제작 및 배포 경험.", tags: ["React", "Vite", "Netlify"], githubUrl: "#" },
];


function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* 1. 사막 컨셉 제목 적용 */}
      <h2>프로젝트 사구 (Project Dunes)</h2>
      <p className="section-description">
        제가 탐험하고 건설한 주요 개발 결과물들입니다. 각 사구마다 고유한 기술과 이야기를 담고 있습니다.
      </p>

      {/* 2. 프로젝트 카드를 담을 공간 */}
      <div className="project-list">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} /> // 3. 개별 카드 컴포넌트 사용
        ))}
      </div>
    </section>
  );
}

// 3. 개별 프로젝트 카드 컴포넌트 정의
const ProjectCard = ({ project }) => (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
            {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
            ))}
        </div>
        <a href={project.githubUrl} className="btn-project-link">
            GitHub Repository 보러가기 ➡️
        </a>
    </div>
);

export default Projects;