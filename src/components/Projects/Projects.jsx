import React from 'react';

const projects = [
  { 
    // === 1. 팀 프로젝트: AI 성장형 캐릭터 시스템 ===
    title: "AI 성장형 캐릭터 시스템 (팀 프로젝트)", 
    subtitle: "Full-Stack | MSA | AI/ML", 
    description: "MSA 기반, FastAPI와 AI Horde(Stable Diffusion img2img)를 활용하여 **로컬 GPU 한계를 극복**하고 캐릭터를 시각적으로 진화시키는 파이프라인 구현.", 
    tags: ["React","Spring Boot","FastAPI","AI_Horde","MSA"], 
    githubUrl: "https://github.com/zcx1119son/Gmaking-Team-Project", 
    demoUrl: "https://www.youtube.com/watch?v=YTS0xrpQASI", // 시연 영상 링크 반영
    notesUrl: "https://temporal-flight-602.notion.site/27877debdf8d80c48541cc32126d0a4e?v=27877debdf8d80c98022000c650699fb&source=copy_link" // 팀 노션 참고 자료 반영
  },
  { 
    // === 0. 개인 프로젝트: 한국어 유해 단어 분류 AI 모델 ===
    title: "한국어 유해 단어 분류 AI 모델",
    subtitle: "React Hooks Mastery", 
    description: "MSA 기반 팀 프로젝트를 마친 후, 개인적으로 BERT 모델을 파인튜닝하여 한국어 유해 텍스트를 탐지하고 7가지 유형으로 분류하는 2단계 분류 시스템 구현.",
    tags: ["Python","PyTorch","BERT","NLP","Classification"],
    githubUrl: "https://github.com/zcx1119son/Korean-Toxicity-Model", // 새 AI 모델 저장소
    demoUrl: "https://drive.google.com/drive/folders/1dL8Y7zl4BddPBDbXeHF5BwB5hf-1N_b7?usp=sharing", // 모델 파일 (Google Drive) 링크를 Demo URL로 활용
    notesUrl: "https://www.aihub.or.kr/aihubdata/data/view.do?pageIndex=1&currMenu=115&topMenu=100&srchOptnCnd=OPTNCND001&searchKeyword=%EA%B5%AD%EA%B0%80%EA%B8%B0%EB%A1%9D%EB%AC%BC&srchDetailCnd=DETAILCND001&srchOrder=ORDER001&srchPagePer=20&aihubDataSe=data&dataSetSn=71788" // AI Hub 데이터셋 링크를 Notes URL로 활용
  },
  { 
    // === 3. Spring Security RESTful API ===
    title: "Spring Security RESTful API", 
    subtitle: "Backend & Security", 
    description: "JWT + Swagger 블로그 서버", 
    tags: ["Spring Boot","JWT","MySQL"], 
    githubUrl: "https://github.com/zcx1119son/spring-jwt-api", 
    demoUrl: "#", // 데모 없음
    notesUrl: null // 노트 없음
  },
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
    
    {/* ===== 추가된 버튼 영역: GitHub, Demo, Notes ===== */}
    <div className="mt-6 flex flex-col gap-3">
        {/* GitHub 버튼 (기존) */}
        <a 
          href={project.githubUrl} 
          target="_blank"
          className="block text-center py-3 bg-night-sky hover:bg-sand-dark text-sand-light font-black text-lg rounded-xl shadow-2xl border-4 border-sunset"
        >
          GitHub 바로가기
        </a>

        {/* 시연 영상 버튼 (Demo) */}
        {project.demoUrl && project.demoUrl !== '#' && (
            <a 
              href={project.demoUrl} 
              target="_blank"
              className="block text-center py-3 bg-sunset/80 hover:bg-sunset text-night-sky font-bold text-base rounded-xl transition"
            >
              🎬 시연 영상
            </a>
        )}

        {/* 팀 노션 참고 자료 버튼 (Notes) */}
        {project.notesUrl && (
            <a 
              href={project.notesUrl} 
              target="_blank"
              className="block text-center py-2 text-sand-light/60 hover:text-sand-light text-sm transition"
            >
              (팀 프로젝트 전체 기록)
            </a>
        )}
    </div>
    {/* ================================================= */}
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
