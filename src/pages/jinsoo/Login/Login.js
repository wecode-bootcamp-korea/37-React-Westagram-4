import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate, link } from 'react-router-dom';
import './Login.scss';

function LoginJinsoo() {
  // 로그인 콘솔
  // const [isUserId, setUserId] = useState('');
  // const saveUserId = event => {
  //   console.log(event.target.value);
  //   setUserId(event.target.value);
  // };

  // const [isUserPw, setUserPw] = useState('');
  // const saveUserPw = event => {
  //   console.log(event.target.value);
  //   setUserPw(event.target.value);
  // };
  // 로그인 콘솔

  // 로그인 버튼 활성화 비활성화

  let [active, setActive] = useState(false);

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      navigate('/Main/jinsoo');
    } else {
      alert(' 땡 ! ');
    }
  };

  const ActiveIsPassedLogin = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };
  const handlePw = e => {
    setPwInput(e.target.value);
  };

  // 로그인 버튼 활성화 비활성화

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
    <div className="main">
      <div className="secondmain">
        <div>
          <div>
            <h1 className="logo">
              <a href="/Login/Jinsoo">Jinsootagram</a>
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="userID"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="userid"
              // value={isUserId}
              // onChange={saveUserId}
              onChange={handleId}
              onKeyUp={ActiveIsPassedLogin}
              // onClick={handleSigninBtn}
            />
            <br />
            <input
              type="password"
              name="userpassword"
              id="pw"
              placeholder="비밀번호"
              className="userpw"
              // value={isUserPw}
              // onChange={saveUserPw}
              onChange={handlePw}
              onKeyUp={ActiveIsPassedLogin}
              // onClick={handleSigninBtn}
            />
            <br />
          </div>
          <div>
            <button
              className={"active ? 'activeLoginBtn' : 'loginBtn' login"}
              onClick={goToMain}
              disabled={idValue === '' || pwValue === '' ? true : false}
            >
              로그인
            </button>
          </div>
          <div className="last">
            <a href="#" className="idontknow">
              비밀번호를 잊으셨나요 ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginJinsoo;
