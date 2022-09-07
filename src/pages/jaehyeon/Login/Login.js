import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function LoginJaehyeon() {
  const navigate = useNavigate();
  // let [idValue, setIdValue] = useState('');
  // let [pwValue, setPwValue] = useState('');
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  // const handleEmail = event => {
  //   const { value } = event.target;
  //   setInputValues({ ...inputValues, email: value });
  // };

  // const handlePassword = event => {
  //   const { value } = event.target;
  //   setInputValues({ ...inputValues, password: value });
  // }; 위 두 코드 합치면 아래처럼 됨.
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }; // 객체의 name이란 키에 value 부여.

  // function saveUserId(e) {
  //   setIdValue(e.target.value);
  // }
  const handleLogin = () => {
    fetch('http://10.58.0.33:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {
        // if (data.accessToken) {
        //   navigate('/Main/jaehyeon');
        // }
        data.accessToken
          ? navigate('/Main/jaehyeon')
          : alert('ID, PW 확인 요망');

        return window.localStorage.setItem('token', data.accessToken);
      });

    // navigate('/Main/jaehyeon');
  };
  const handleSignUp = () => {
    fetch('http://10.58.0.33:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data.message));
  };

  const isValid =
    inputValues.email.includes('@') && inputValues.password.length >= 5;

  return (
    <div className="Login">
      <div className="login-container">
        <div className="login-section">
          <div className="logo-box">Westagram</div>
          <div className="login-box">
            <input
              id="id-input"
              name="email"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
            <input
              id="pw-input"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInput}
            />
            <button id="login-button" disabled={!isValid} onClick={handleLogin}>
              로그인
            </button>
            <button id="signup-button" onClick={handleSignUp}>
              sign up
            </button>
          </div>
          <div className="divide-box">
            <div className="divide-line1" />
            <div>또는</div>
            <div className="divide-line2" />
          </div>
          <div className="footer">
            <div className="facebook-login">
              <i className="fa-brands fa-square-facebook" />
              <a
                href="https://naver.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fakebook으로 로그인
              </a>
            </div>
            <div className="search-password">
              <a
                href="https://www.naver.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginJaehyeon;
