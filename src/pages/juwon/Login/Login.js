import React from 'react';
import { useState } from 'react';
import './login.scss';

function LoginJuwon() {
  return (
    <div className="outerBox">
      <div className="titleBox">Westagram</div>
      <div className="inputBox">
        <input
          value={}
          onChange={}
          id="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          value={}
          onChange={}
          id="password"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <div className="buttonBox hover">
        <button className={ 'buttonInactive'}>
          로그인
        </button>
      </div>
      <div className="forgetBox">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default LoginJuwon;
