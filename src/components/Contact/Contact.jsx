import React from 'react';

function Contact() {
  return (
    // 배경색: bg-night-sky, 텍스트색: text-sand-light
    <section id="contact" className="py-16 px-4 sm:px-8 **bg-night-sky** **text-sand-light** min-h-[40vh]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 제목: border-sunset 색상 적용 */}
        <h2 className="text-4xl font-extrabold **text-sand-light** mb-4 border-b-4 **border-sunset** pb-2 inline-block">
          연락 캠프 (Contact Camp)
        </h2>
        
        {/* 설명 텍스트: text-sand-main 색상 적용 */}
        <p className="**text-sand-main** mb-12 text-lg">
          협업, 문의 또는 커피챗을 원하시면 언제든지 저에게 연락하세요.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12">
          
          {/* 이메일 항목 카드: bg-sand-dark 색상 적용 */}
          <div className="contact-item **bg-sand-dark** p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-64">
            <h3 className="text-xl font-semibold **text-sand-light** mb-3">이메일</h3>
            <p className="**text-sand-light**/80">
              {/* 링크: text-sunset 악센트 색상 적용 */}
              <a 
                href="mailto:zcx1119son@gmail.com" 
                className="**text-sunset** hover:text-sand-light transition-colors duration-200 break-words"
              >
                zcx1119son@gmail.com
              </a>
            </p>
          </div>
          
          {/* GitHub 항목 카드: bg-sand-dark 색상 적용 */}
          <div className="contact-item **bg-sand-dark** p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-64">
            <h3 className="text-xl font-semibold **text-sand-light** mb-3">GitHub</h3>
            <p className="**text-sand-light**/80">
              {/* 링크: text-sunset 악센트 색상 적용 */}
              <a 
                href="https://github.com/zcx1119son" 
                target="_blank" 
                rel="noopener noreferrer"
                className="**text-sunset** hover:text-sand-light transition-colors duration-200"
              >
                github.com/zcx1119son
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer: 경계선과 텍스트 색상 수정 */}
      <footer className="mt-16 pt-8 border-t **border-sand-dark** text-center **text-sand-main** text-sm">
        <p>© 2025 zcx1119son Developer Journey Track. All rights reserved.</p>
      </footer>
    </section>
  );
}
export default Contact;