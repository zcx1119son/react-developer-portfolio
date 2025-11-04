import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>연락 캠프 (Contact Camp)</h2>
      <p className="section-description">
        협업, 문의 또는 커피챗을 원하시면 언제든지 저에게 연락하세요.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>이메일</h3>
          <p>
            <a href="https://zcx1119son@gmail.com">zcx1119son@gmail.com</a>
          </p>
        </div>
        
        <div className="contact-item">
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/zcx1119son" target="_blank" rel="noopener noreferrer">
              github.com/zcx1119son
            </a>
          </p>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>© 2025 zcx1119son Developer Journey Track. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;