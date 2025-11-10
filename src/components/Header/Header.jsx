import React from 'react';

// 섹션 ID와 라벨 목록
const navItems = [
    { id: 'hero', label: '탐험 시작' },
    { id: 'skills', label: '기술 오아시스' },
    // 라벨 변경: '프로젝트 사구' -> '프로젝트 (웹/AI)'
    { id: 'projects', label: '프로젝트 (웹/AI)' }, 
    { id: 'contact', label: '연락 캠프' },
];

export default function Header() {
    
    // 네비게이션 클릭 시 스크롤 위치를 조정하는 함수
    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        
        const targetElement = document.getElementById(id);
        if (targetElement) {
            
            // 기본 헤더 높이 (80px)를 보정값으로 설정
            let offsetAdjustment = 80; 
            
            // 🌟 'projects' ID인 경우에만 추가적인 여백(40px)을 더합니다.
            if (id === 'projects') {
                // 80px (헤더 높이) + 40px (추가 여백) = 120px
                offsetAdjustment = 120; 
            }
            // 'skills'나 'contact' 등 다른 섹션도 필요하다면 여기서 조정할 수 있습니다.
            
            // 목표 요소의 절대적인 상단 위치
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            
            // 스크롤 시 목표 위치: 요소 위치 - 보정값
            const offsetPosition = targetPosition - offsetAdjustment;

            // 부드러운 스크롤 실행
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        // header는 고정(fixed) 상태를 유지합니다.
        <header className="fixed top-0 left-0 w-full z-50 bg-night-sky shadow-2xl border-b-4 border-sunset">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
                
                {/* 로고 - 클릭 시 최상단으로 이동 (handleScrollToSection 활용) */}
                <a 
                    href="#hero" 
                    onClick={(e) => handleScrollToSection(e, 'hero')} // 로고 클릭에도 적용
                    className="flex items-center gap-2 text-3xl font-black text-sand-main hover:text-sand-light transition"
                >
                    <span className="text-5xl">🏜️</span> Journey Track
                </a>
                
                {/* 네비게이션 */}
                <nav className="hidden md:flex gap-10">
                    {navItems.map((item) => (
                        <a 
                            key={item.id}
                            href={`#${item.id}`} 
                            // 🌟 onClick 이벤트에서 스크롤 오프셋 처리 🌟
                            onClick={(e) => handleScrollToSection(e, item.id)}
                            className="text-sand-light hover:text-sunset font-bold text-lg transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
