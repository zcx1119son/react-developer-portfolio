import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/">🏜️ Journey Track</a>
      </div>
      
      {/* 네비게이션 메뉴 (사막 탐험 컨셉 용어 적용) */}
      <nav className="nav-links">
        <a href="#hero">탐험 시작</a>
        <a href="#skills">기술 오아시스</a> {/* Skills */}
        <a href="#projects">프로젝트 사구</a> {/* Projects */}
        <a href="#contact">연락 캠프</a> {/* Contact */}
      </nav>
    </header>
  );
}

export default Header;