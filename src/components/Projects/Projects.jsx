import React from 'react';

const projects = [
  { title: "팀 프로젝트: AI 성장형 캐릭터 시스템 (G-Making)", subtitle: "Full-Stack & AI", description: "MSA 기반 Stable Diffusion img2img로 캐릭터 성장 구현", tags: ["React","Spring Boot","FastAPI","AI_Horde"], githubUrl: "https://github.com/zcx1119son/my-gmaking-contribution", demoUrl: "#" },
  { title: "고급 React 상태 관리 앱", subtitle: "React Hooks Mastery", description: "Context API + Custom Hooks로 초경량 플래너", tags: ["React","TypeScript","Tailwind"], githubUrl: "https://github.com/zcx1119son/react-hooks-planner", demoUrl: "#" },
  { title: "Spring Security RESTful API", subtitle: "Backend & Security", description: "JWT + Swagger 블로그 서버", tags: ["Spring Boot","JWT","MySQL"], githubUrl: "https://github.com/zcx1119son/spring-jwt-api", demoUrl: "#" },
];

const ProjectCard = ({ project }) => (
 <div 
  onClick={(e) => {
    const card = e.currentTarget;
    if (card.dataset.clicked) return;
    card.dataset.clicked = 'true';
    card.classList.add('animate-ping');
    setTimeout(() => card.classList.remove('animate-ping'), 600);
  }}
  className="bg-sand-dark p-8 rounded-2xl shadow-2xl border border-sunset/30 
              hover:shadow-sunset/50 hover:-translate-y-3 hover:scale-105 
              transition-all duration-500 backdrop-blur-sm cursor-pointer 
              flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-sand-light mb-2 group-hover:text-sunset transition">
        {project.title}
      </h3>
      <p className="text-sand-light/80 mb-4">{project.subtitle}</p>
      <p className="text-sand-light/90 text-sm leading-relaxed">{project.description}</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {project.tags.map(t => (
        <span key={t} className="px-3 py-1 bg-sunset/20 text-sunset text-xs rounded-full">
          {t}
        </span>
      ))}
    </div>
    <a 
      href={project.githubUrl} 
      target="_blank"
      className="mt-6 block text-center py-4 bg-night-sky hover:bg-sand-dark text-sand-light font-black text-lg rounded-2xl shadow-2xl border-4 border-sunset"
    >
      GitHub 바로가기
    </a>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-night-sky min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <h2 className="text-6xl font-black text-center mb-16 bg-gradient-to-r from-sand-light to-sand-main bg-clip-text text-transparent">
          프로젝트 사구
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}