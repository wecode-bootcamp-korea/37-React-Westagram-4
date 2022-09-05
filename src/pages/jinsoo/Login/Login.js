import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';

function LoginJinsoo() {
  return (
    <div>
      <div className="main">
        <div>
          <div>
            <h1 className="logo">Westagram</h1>
          </div>
          <div>
            <input
              type="text"
              name="userID"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="userid"
            />
            <br />
            <input
              type="password"
              name="userpassword"
              placeholder="비밀번호"
              className="userpw"
            />
            <br />
          </div>
          <div>
            <button className="login" disabled>
              로그인
            </button>
          </div>
          <div className="last">
            <a href="" className="idontknow">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginJinsoo;
