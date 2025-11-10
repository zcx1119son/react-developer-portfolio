import React from 'react';

export default function Hero() {
    
    // TODO: 여기에 이력서 PDF 파일의 외부 URL을 넣어주세요.
    // 예시: const resumeUrl = "https://docs.google.com/document/d/1XyZ.../export?format=pdf";
    const resumeUrl = "https://drive.google.com/file/d/1JcjZahRsXjwjP8wHRbw9K74nW5ofCBMW/view?usp=sharing"; // 이 부분을 외부 URL로 변경하거나, 기존처럼 루트 경로에 PDF를 배치할 경우 유지합니다.

    return (
        // 상단 Header 높이만큼 padding-top을 추가 (h-20)
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-8 bg-night-sky text-sand-light">
            
            <div className="relative z-10 text-center max-w-5xl mx-auto py-20"> {/* 내부 패딩 추가 */}
                {/* 서브 타이틀 */}
                <p className="text-2xl font-bold tracking-widest uppercase text-sand-main mb-6 animate-fade-in">
                    Developer’s Odyssey
                </p>

                {/* 메인 타이틀 */}
                <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
                    <span className="bg-gradient-to-r from-sand-light via-sand-main to-sunset bg-clip-text text-transparent drop-shadow-2xl">
                        엄정민의 코드 <br/>사막 횡단기
                    </span>
                </h1>

                {/* 설명 - AI 통합 능력 강조 */}
                <p className="text-xl md:text-2xl text-sand-light/90 mb-12 leading-relaxed 
                    mx-auto px-6 max-w-4xl break-keep">
                    프론트엔드/백엔드 개발자로서 겪어온 도전과 성장의 발자취입니다.
                    <br className="hidden sm:block" />
                    저는 
                    <span className="text-sunset font-bold"> React</span>와{' '}
                    <span className="text-sunset font-bold">Spring Boot</span>
                    를 주무기로,
                    <br />
                    <span className="text-sunset font-bold">MSA 기반 AI 통합 시스템</span> 구축 경험을 통해
                    <br className="hidden sm:block" />
                    문제를 해결하고 가치를 창출하는 여정을 기록합니다.
                </p>

                {/* 버튼 - 링크 수정 및 라벨 간결화 */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        // 프로젝트 섹션 ID로 이동
                        href="#projects" 
                        className="px-10 py-5 bg-sunset text-night-sky font-bold text-xl rounded-2xl 
                                     shadow-2xl hover:shadow-sunset/70 hover:scale-[1.05] 
                                     transition-all duration-300 border-4 border-sunset"
                    >
                        프로젝트 탐험하기
                    </a>
                    
                    {/* 🌟 이력서 다운로드 버튼 수정 🌟 */}
                    <a
                        href={resumeUrl} // 🌟 수정된 resumeUrl 변수 사용
                        download
                        target="_blank" // 외부 링크일 경우 새 탭에서 열도록 설정
                        rel="noopener noreferrer"
                        className="px-10 py-5 border-4 border-sand-main text-sand-main font-bold text-xl rounded-2xl 
                                     hover:bg-sand-main hover:text-night-sky 
                                     transition-all duration-300 shadow-xl hover:scale-[1.05]"
                    >
                        이력서 다운로드
                    </a>
                </div>
            </div>
            
            {/* 화면 하단에 모래 언덕(Dune) 형태의 배경 효과 추가 */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-sand-dark/80 to-transparent pointer-events-none"></div>
        </section>
    );
}
