import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-night-sky shadow-2xl border-b-4 border-sunset">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-2 text-3xl font-black text-sand-main hover:text-sand-light transition">
          <span className="text-5xl">🏜️</span> Journey Track
        </a>
        
        {/* 네비 */}
        <nav className="hidden md:flex gap-10">
          {['탐험 시작', '기술 오아시스', '프로젝트 사구', '연락 캠프'].map((text, i) => (
            <a 
              key={i}
              href={['#hero', '#skills', '#projects', '#contact'][i]}
              className="text-sand-light hover:text-sunset font-bold text-lg transition"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}