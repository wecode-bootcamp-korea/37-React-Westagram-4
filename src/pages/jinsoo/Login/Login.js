import React, { useState } from 'react';
import './Login.scss';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function LoginJinsoo() {
  const [isUserId, setUserId] = useState('');
  const saveUserId = event => {
    console.log(event.target.value);
    setUserId(event.target.value);
  };

  const [isUserPw, setUserPw] = useState('');
  const saveUserPw = event => {
    console.log(event.target.value);
    setUserPw(event.target.value);
  };

  // const handleSigninBtn = event => {
  //   event.preventDefault();
  //   console.log('handleLoginBtn click!');
  //   fetch('http://10.58.0.33:3000/auth/signup', {
  //     method: 'post',
  //     headers: { 'content-Type': 'application/json;charset=utf-8' },
  //     body: JSON.stringify({
  //       email: inputValue.email,
  //       password: inputValue.pw,
  //     }),
  //   }) // 요청
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  //   // 응답
  // };

  // const handleSignupBtn = event => {
  //   event.preventDefault();
  //   console.log('handlSignupBtn click!');
  //   fetch('http://10.58.0.33:3000/auth/signup', {
  //     method: 'Post',
  //     headers: { 'content-Type': 'application/json;charset=utf-8' },
  //     body: JSON.stringify({
  //       email: inputValue.email,
  //       password: inputValue.pw,
  //     }),
  //   }) // 요청
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  //   // 응답
  // };

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
              value={isUserId}
              onChange={saveUserId}
              // onClick={handleSigninBtn}
            />
            <br />
            <input
              type="password"
              name="userpassword"
              placeholder="비밀번호"
              className="userpw"
              value={isUserPw}
              onChange={saveUserPw}
              // onClick={handleSigninBtn}
            />
            <br />
          </div>
          <div>
            {/* <button
              className="signup"
              // onClick={handleSignupBtn}
            >
              회원가입
            </button> */}
            <button className="login" disabled>
              로그인
            </button>
          </div>
          <div className="last">
            <a href="" className="idontknow">
              비밀번호를 잊으셨나요 ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginJinsoo;
