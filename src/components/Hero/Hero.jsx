import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-8 bg-night-sky text-sand-light">
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
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

        {/* 설명 */}
        <p className="text-xl md:text-2xl text-sand-light/90 mb-12 leading-relaxed 
          mx-auto px-6 max-w-4xl break-keep">
          프론트엔드/백엔드 개발자로서 겪어온 도전과 성장의 발자취입니다.
          <br className="hidden sm:block" />
          저는 
          <span className="text-sunset font-bold">React</span>와{' '}
          <span className="text-sunset font-bold">Spring Boot</span>
          를 주무기로,
          <br className="hidden sm:block" />
          문제를 해결하고 가치를 창출하는 여정을 기록합니다.
        </p>

        {/* 버튼 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://umjeongmin-portfolio.vercel.app/#project-dunes"
            className="px-10 py-5 bg-sunset text-night-sky font-bold text-xl rounded-2xl 
                       shadow-2xl hover:shadow-sunset/70 hover:scale-110 
                       transition-all duration-300 border-4 border-sunset"
          >
            프로젝트 사구 탐험
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-10 py-5 border-4 border-sand-main text-sand-main font-bold text-xl rounded-2xl 
                       hover:bg-sand-main hover:text-night-sky 
                       transition-all duration-300 shadow-xl"
          >
            이력서 다운로드
          </a>
        </div>
      </div>
    </section>
  );
}