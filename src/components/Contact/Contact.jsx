import React from 'react';

function Contact() {

    // 메일 아이콘 (Mail SVG) - Lucide-react 스타일 기반
    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            className="text-sunset mx-auto mb-3">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
    );

    // 깃 브랜치 아이콘 (GitBranch SVG) - Lucide-react 스타일 기반
    const GitBranchIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            className="text-sunset mx-auto mb-3">
            <line x1="6" x2="6" y1="3" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
            <circle cx="6" cy="18" r="3"></circle>
        </svg>
    );

    return (
        // 배경색: bg-night-sky, 텍스트색: text-sand-light
        <section id="contact" className="py-24 px-4 sm:px-8 bg-night-sky text-sand-light min-h-[50vh] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center w-full">
                
                {/* 제목: text-sand-main으로 변경하여 강조 */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-sand-main mb-4 border-b-4 border-sunset pb-2 inline-block">
                    연락 캠프 (Contact Camp)
                </h2>
                
                {/* 🌟 설명 텍스트 수정: 기술적 관심사 및 채용 관련 문의로 초점 변경 */}
                <p className="text-sand-main mb-12 text-lg">
                    저의 기술 스택 및 개발 과정에 대해 궁금하신 점이 있다면 언제든지 연락 주세요.
                    <br />
                    채용 또는 협업 문의 역시 환영합니다.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12">
                    
                    {/* 이메일 항목 카드: bg-sand-dark 색상 적용 및 아이콘 추가 */}
                    <div className="contact-item bg-sand-dark/80 p-8 rounded-xl shadow-xl border border-sunset/30 
                                     hover:shadow-sunset/50 hover:scale-[1.05] transition-all duration-300 
                                     w-full sm:w-64 transform">
                        <MailIcon />
                        <h3 className="text-xl font-semibold text-sand-light mb-3">이메일</h3>
                        <p className="text-sand-light/80">
                            {/* 링크: text-sunset 악센트 색상 적용 */}
                            <a 
                                href="mailto:zcx1119son@gmail.com" 
                                className="text-sunset hover:text-sand-light font-medium transition-colors duration-200 break-words"
                            >
                                zcx1119son@gmail.com
                            </a>
                        </p>
                    </div>
                    
                    {/* GitHub 항목 카드: bg-sand-dark 색상 적용 및 아이콘 추가 */}
                    <div className="contact-item bg-sand-dark/80 p-8 rounded-xl shadow-xl border border-sunset/30 
                                     hover:shadow-sunset/50 hover:scale-[1.05] transition-all duration-300 
                                     w-full sm:w-64 transform">
                        <GitBranchIcon />
                        <h3 className="text-xl font-semibold text-sand-light mb-3">GitHub</h3>
                        <p className="text-sand-light/80">
                            {/* 링크: text-sunset 악센트 색상 적용 */}
                            <a 
                                href="https://github.com/zcx1119son" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sunset hover:text-sand-light font-medium transition-colors duration-200"
                            >
                                github.com/zcx1119son
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer: 경계선과 텍스트 색상 수정 */}
            <footer className="mt-20 pt-8 border-t border-sand-dark/50 text-center text-sand-main text-sm w-full max-w-7xl mx-auto px-4">
                <p>© 2025 zcx1119son Developer Journey Track. All rights reserved.</p>
            </footer>
        </section>
    );
}
export default Contact;
