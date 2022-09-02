import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function LoginJaehyeon() {
  const navigate = useNavigate();
  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');
  let [isValid, setIsValid] = useState(false);

  return (
    <div className="Login">
      <div className="login-container">
        <div className="login-section">
          <div className="logo-box">Westagram</div>
          <div className="login-box">
            <input
              id="id-input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => {
                // setIdValue(e.target.value);
                idValue = e.target.value;
                idValue.includes('@') && pwValue.length >= 5
                  ? setIsValid(true)
                  : setIsValid(false);
              }}
            />
            <input
              id="pw-input"
              type="password"
              placeholder="비밀번호"
              onChange={e => {
                // setPwValue(e.target.value);
                pwValue = e.target.value;
                idValue.includes('@') && pwValue.length >= 5
                  ? setIsValid(true)
                  : setIsValid(false);
              }}
            />
            <button
              id="login-button"
              className={isValid ? 'on-button' : 'off-button'}
              onClick={() => {
                return isValid ? navigate('/Main/jaehyeon') : null; //id에 @들어가고 pw값이 5자 이상일 때 main으로 화면 전환
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
