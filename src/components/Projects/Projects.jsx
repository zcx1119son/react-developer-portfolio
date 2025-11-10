import React from 'react';

// 볼드체 Markdown (**)을 <strong> 태그로 변환하는 함수
const renderMarkdown = (text) => {
    // **text** 패턴을 <strong>text</strong>로 변환
    const htmlText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
};


const projects = [
    // === Web/Backend Projects (Full-Stack/MSA) ===
    { 
        type: 'WEB', // 분류: WEB
        title: "AI 성장형 캐릭터 시스템 (팀 프로젝트)", 
        subtitle: "Full-Stack | MSA | AI/ML", 
        description: "MSA 기반, FastAPI와 AI Horde(Stable Diffusion img2img)를 활용하여 **로컬 GPU 한계를 극복**하고 캐릭터를 시각적으로 진화시키는 파이프라인 구현.", 
        tags: ["React","Spring Boot","FastAPI","AI_Horde","MSA", "Stable_Diffusion"], 
        githubUrl: "https://github.com/zcx1119son/Gmaking-Team-Project", 
        demoUrl: "https://www.youtube.com/watch?v=YTS0xrpQASI", 
        notesUrl: "https://temporal-flight-602.notion.site/27877debdf8d80c48541cc32126d0a4e?v=27877debdf8d80c98022000c650699fb&source=copy_link"
    },
    // === Web/Backend Projects (수정된 항목) ===
    { 
        type: 'WEB', // 분류: WEB
        title: "야구장 맛집/정보 추천 커뮤니티 (YABAB)", 
        subtitle: "Stadium Guide Backend", 
        description: "Spring Boot와 Spring Data JPA를 활용하여 전국 야구장 구장별 음식 정보, 선수 맛집 추천 및 사용자 커뮤니티 기능을 위한 RESTful API를 구축했습니다.", 
        tags: ["Spring Boot", "Spring Data JPA", "Oracle", "RESTful", "Community"], 
        githubUrl: "https://github.com/zcx1119son/yabab_project", 
        demoUrl: "https://www.youtube.com/watch?v=yQFHgwuHjG4", 
        notesUrl: "https://www.notion.so/YABAB-Core-Contribution-2a7de68d8c8b80bdb9abf4e1e273ce39"
    },
    // === AI/ML Projects: 졸음 감지 시스템 (Notion 링크 유지) ===
    {
        type: 'AI', // 분류: AI
        title: "딥러닝 기반 운전자 졸음 감지 시스템 (캡스톤)",
        subtitle: "Deep Learning | Computer Vision | Alert System",
        description: "YOLOv8과 랜드마크 기반 CNN 모델을 결합하여 운전자의 **눈 깜박임(EAR) 및 하품(MAR)을 실시간으로 분석**하고, 위험 상황 시 경고 알림을 제공하는 고정밀 시스템 개발.",
        tags: ["Python", "YOLOv8", "TensorFlow", "OpenCV", "Deep_Learning", "Computer_Vision", "Capstone"],
        githubUrl: "https://github.com/zcx1119son/DL-Drowsiness-Detection-Capstone",
        demoUrl: null,
        notesUrl: "https://www.notion.so/2a72e77d543b80a09c49dfe5a4492bb9" 
    },
    // === AI/ML Projects: 유해 단어 분류 (버튼 텍스트 변경) ===
    { 
        type: 'AI', // 분류: AI
        title: "한국어 유해 단어 분류 AI 모델",
        subtitle: "BERT Fine-tuning | NLP Classification", 
        description: "개인적으로 BERT 모델을 파인튜닝하여 한국어 유해 텍스트를 탐지하고 7가지 유형으로 분류하는 2단계 분류 시스템 구현.",
        tags: ["Python","PyTorch","BERT","NLP","Classification", "Fine-tuning"],
        githubUrl: "https://github.com/zcx1119son/Korean-Toxicity-Model", 
        demoUrl: "https://drive.google.com/drive/folders/1dL8Y7zl4BddPBDbXeHF5BwB5hf-1N_b7?usp=sharing",
        // 모델 파일/결과가 담긴 Drive 링크이므로, 버튼 텍스트를 명확히 지정
        customDemoText: "학습 모델 파일 및 결과", 
        notesUrl: "https://www.notion.so/HateSpeech-Detector-NLP-2-2a7fc91e237280dd81edfe2e631934c2"
    },
];

// Reusable Icon Components (for single file use)
const GitHubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.76-2.9-2.22-4-2.22-4a1.84 1.84 0 0 0-1.72-1c-1.25.04-2.61.64-3.56 1.62A10.82 10.82 0 0 0 12 5.3v-2.1c0-.42-.35-.78-.78-.78H11c-.44 0-.78.36-.78.78V5.3a10.82 10.82 0 0 0-2.48.92c-1.3-.98-2.56-1.58-3.56-1.62a1.84 1.84 0 0 0-1.72 1s-2.98 1.1-2.22 4c-.51 1.06-.86 2.25-.78 3.5 0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/></svg>
);
const YoutubeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M2.5 17.5c0 .3.2.5.5.5h20c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5h-20c-.3 0-.5.2-.5.5v10z"/><path d="M10 9l5 3-5 3V9z"/></svg>
);
const LinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const NotesIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>
);


const ProjectCard = ({ project }) => {
    // 1. 커스텀 텍스트가 있으면 그것을 사용
    let demoButtonText = project.customDemoText;
    let DemoIconComponent = LinkIcon;

    if (!demoButtonText) {
        // 2. 커스텀 텍스트가 없으면 기존 로직 (YouTube 체크) 사용
        if (project.demoUrl && project.demoUrl.includes('youtube')) {
            demoButtonText = '시연 영상';
            DemoIconComponent = YoutubeIcon;
        } else {
            // 3. YouTube도 아니면 일반적인 텍스트 사용
            demoButtonText = '라이브 데모/자료';
        }
    }


    return (
        <div 
            className="bg-sand-dark p-8 rounded-2xl shadow-2xl border border-sunset/30 
                        hover:shadow-sunset/50 hover:-translate-y-2 
                        transition-all duration-300 backdrop-blur-sm cursor-default 
                        flex flex-col justify-between h-full"
        >
            <div>
                {/* 제목 색상을 text-sunset으로 변경하여 가시성 확보 */}
                <h3 className="text-3xl font-extrabold text-sunset mb-2 hover:text-sand-main transition">
                    {project.title}
                </h3>
                <p className="text-sunset/80 text-lg font-medium mb-4">{project.subtitle}</p>
                
                {/* renderMarkdown 함수를 사용하여 description 렌더링 */}
                <p className="text-sand-light/90 text-sm leading-relaxed border-l-2 border-sunset/50 pl-3 py-1 min-h-[5rem]">
                    {renderMarkdown(project.description)}
                </p>
                {/* -------------------------------------------------------- */}
            </div>
            
            <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-sunset/20 text-sunset text-xs font-semibold rounded-full whitespace-nowrap">
                            {t.replace(/_/g, ' ')}
                        </span>
                    ))}
                </div>
            
                {/* ===== Link Buttons Area: GitHub, Demo, Notes ===== */}
                <div className="flex flex-col gap-3">
                    {/* GitHub Button: 배경색, 글씨색 고대비 유지 및 사막색 테두리 적용 */}
                    <a 
                        href={project.githubUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-3 
                                   bg-[#172238] hover:bg-[#20304a] 
                                   text-sunset font-black text-base rounded-xl transition 
                                   shadow-xl shadow-sunset/20 hover:shadow-sunset/50
                                   border-2 border-[#CCD6F6]/80 opacity-90 hover:opacity-100" // <--- 사막색(sand-main: #CCD6F6) 테두리 적용
                    >
                        {/* 아이콘 색상도 text-sunset과 동일하게 변경 */}
                        <GitHubIcon className="h-5 w-5 fill-sunset" /> 
                        GitHub
                    </a>

                    {/* Demo/Video Button */}
                    {project.demoUrl && project.demoUrl !== '#' && (
                        <a 
                            href={project.demoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center py-3 border-2 border-sunset/50 text-sunset hover:bg-sunset/10 font-bold text-base rounded-xl transition"
                        >
                            <DemoIconComponent className="h-5 w-5 inline fill-sunset/80" />
                            {demoButtonText}
                        </a>
                    )}

                    {/* Notes/Reference Button */}
                    {project.notesUrl && (
                        <a 
                            href={project.notesUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center py-2 text-sand-light/60 hover:text-sand-light text-sm transition"
                        >
                            <NotesIcon className="h-4 w-4 inline mr-1" />
                            전체 기록/참고 자료
                        </a>
                    )}
                </div>
                {/* ================================================= */}
            </div>
        </div>
    );
};

export default function App() {
    
    // 프로젝트를 AI/ML과 WEB/Backend로 필터링
    const aiProjects = projects.filter(p => p.type === 'AI');
    const webProjects = projects.filter(p => p.type === 'WEB');

    // 웹 프로젝트의 경우, 프로젝트 카드를 한 줄에 2개씩 배치하도록 조정
    const webGridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; 

    // AI 프로젝트의 경우, 프로젝트 카드를 한 줄에 2개씩 배치하도록 조정
    const aiGridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; 

    return (
        // 섹션 상단 패딩 (pt-16)을 완전히 제거했습니다.
        <section id="projects" className="pb-24 bg-night-sky min-h-screen"> 
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                /* Inter Font Import */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                body { font-family: 'Inter', sans-serif; }

                /* Custom Colors (For readability/context only) */
                .bg-night-sky { background-color: #0A192F; }
                .bg-sand-dark { background-color: #112240; }
                .text-sand-main { color: #CCD6F6; } /* 사막색 계열 */
                .text-sand-light { color: #8892B0; }
                .text-sunset { color: #64FFDA; }
                
                /* 볼드체 강조를 위한 스타일 */
                .text-sand-light strong {
                    color: #CCD6F6; /* 볼드체는 더 밝은 색으로 강조 */
                    font-weight: 700; /* Extra Bold */
                }
                `}
            </style>
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* 메인 타이틀의 하단 마진 (mb-12)을 유지하여 타이틀과 첫 섹션 사이의 최소 간격을 확보합니다. */}
                <h2 className="text-6xl font-black text-center mb-12 
                               bg-gradient-to-r from-sunset to-sand-light bg-clip-text text-transparent 
                               drop-shadow-lg drop-shadow-sunset/50 
                               tracking-tight sm:text-7xl">
                    개발 포트폴리오
                </h2>

                
                {/* ======================================= */}
                {/* 1. Web & Backend Projects Section */}
                {/* ======================================= */}
                <h3 className="text-4xl font-extrabold text-sand-main mb-8 border-b-4 border-sunset/50 pb-2 flex items-center">
                    Web & Backend Projects ({webProjects.length})
                </h3>
                <div className={`grid ${webGridClass} gap-8 lg:gap-10 mb-20`}>
                    {webProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
                </div>

                {/* ======================================= */}
                {/* 2. AI & ML Projects Section */}
                {/* ======================================= */}
                <h3 className="text-4xl font-extrabold text-sand-main mb-8 border-b-4 border-sunset/50 pb-2 flex items-center">
                    AI & ML Projects ({aiProjects.length})
                </h3>
                <div className={`grid ${aiGridClass} gap-8 lg:gap-10`}>
                    {aiProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
                </div>
                
            </div>
        </section>
    );
}
