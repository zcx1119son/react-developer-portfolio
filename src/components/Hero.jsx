// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; // 새로 만들 CSS 파일 불러오기

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* 컨셉 적용: 여정의 이름과 환영 메시지 */}
        <p className="subtitle">Developer's Odyssey</p>
        <h1>엄정민의<br/>코드 사막 횡단기</h1>
        <p className="description">
          프론트엔드/백엔드 개발자로서 겪어온 도전과 성장의 발자취입니다.
          저는 <span className="highlight">React와 Spring Boot</span>를 주로 사용하며,
          문제를 해결하고 가치를 창출하는 여정을 기록합니다.
        </p>
        
        {/* 행동 유도 버튼 */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">프로젝트 사구 탐험</a>
          <a href="#" className="btn btn-secondary">이력서 다운로드</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;