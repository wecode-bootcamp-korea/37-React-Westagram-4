import React, { useState } from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div>
      {FOOTER_INFO.map(item => (
        <span className="info" key={item.id}>
          {item.content}
        </span>
      ))}
    </div>
  );
}
export default Footer;

const FOOTER_INFO = [
  { id: 1, content: 'Westagram' },
  { id: 2, content: '정보' },
  { id: 3, content: '지원' },
  { id: 4, content: '홍보센터' },
  { id: 5, content: 'API' },
  { id: 6, content: '채용정보' },
  { id: 7, content: '개인정보처리방침' },
  { id: 8, content: '약관' },
  { id: 9, content: '디렉터리' },
  { id: 10, content: '프로필' },
  { id: 11, content: '해시태그' },
  { id: 12, content: '언어' },
];
