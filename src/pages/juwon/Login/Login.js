import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

function LoginJuwon() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    userId: '',
    userPw: '',
  });
  const { userId, userPw } = inputValue;
  const [disabled, setDisabled] = useState(true);

  const inputChange = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const isItValid = () => {
    if (userId.includes('@') && userPw.length >= 5) {
      setDisabled(false);
    } else setDisabled(true);
  };

  const login = event => {
    event.preventDefault();
    if (userId === '' && userPw === '') {
      return;
    }
    if (userId.includes('@') && userPw.length >= 5) {
      navigate('/main/juwon');
    }
  };

  return (
    <div className="outerBox">
      <div className="titleBox">Westagram</div>
      <form onSubmit={login} onKeyUp={isItValid}>
        <div className="inputBox">
          <input
            onChange={inputChange}
            id="id"
            name="userId"
            value={userId}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={inputChange}
            id="password"
            name="userPw"
            value={userPw}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="buttonBox hover">
          <button className={disabled ? 'buttonInactive' : 'buttonActive'}>
            로그인
          </button>
        </div>
      </form>
      <div className="forgetBox">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default LoginJuwon;
