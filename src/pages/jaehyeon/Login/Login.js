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
    console.log(event.target);
  }; // 객체의 name이란 키에 value 부여.

  // function saveUserId(e) {
  //   setIdValue(e.target.value);
  // }

  let isValid =
    inputValues.email.includes('@') && inputValues.password.length >= 5
      ? false
      : true;

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
            <button
              id="login-button"
              disabled={isValid}
              onClick={() => {
                return navigate('/Main/jaehyeon');
              }}
            >
              로그인
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
