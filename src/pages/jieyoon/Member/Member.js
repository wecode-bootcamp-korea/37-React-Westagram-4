import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
const Member = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const isEmail = email => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };
  const MemberShip = e => {
    e.preventDefault();

    if (!isEmail(userId)) {
      alert('이메일 형식을 지켜주세요');
      return;
    } else if (userPassword < 8) {
      alert('패스워드는 8자 이상입니다.');
    } else {
      fetch('http://10.58.2.26:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ email: userId, password: userPassword }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  };
  return (
    <div className="container">
      <div className="center">
        <div className="main">
          <div id="MemberLogin">
            <div className="title">westagram</div>
            <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
            <button className="facebookLogin">
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221yrfxys17pod7zxefw77g1wmnl1azggks7augky1jpc6yz179s9j3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9b7b9dab-7e23-46c5-8710-ffd57679c531%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221yrfxys17pod7zxefw77g1wmnl1azggks7augky1jpc6yz179s9j3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"
                className="facebookColor"
              >
                <i className="fa-brands fa-square-facebook" />
                Facebook으로 로그인
              </a>
            </button>
            <div className="dotLine">
              <hr
                width="80px"
                size="1px"
                style={{ display: 'inline - flex ' }}
              />
              또는
              <hr
                width="80px"
                size="1px"
                style={{ display: 'inline - flex ' }}
              />
            </div>
            <form className="loginForm">
              <input
                type="text"
                placeholder="휴대폰 번호 또는 이메일 주소"
                className="userEmail"
                value={userId}
                onChange={e => {
                  setUserId(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className="userPassword"
                value={userPassword}
                onChange={e => {
                  setUserPassword(e.target.value);
                }}
              />
              <br />
              <button type="submit" className="MemberBtn" onClick={MemberShip}>
                가입
              </button>
            </form>
          </div>

          <div className="idCreate">
            계정이 있으신가요?<a href="css.html"> 로그인</a>
          </div>
          <div className="App">
            <div className="AppDown">앱을 다운로드 하세요.</div>
            <div className="AppImg">
              <button>
                <img
                  src={`${process.env.PUBLIC_URL}/images/jieyoon/4a5c9d62d51b.png`}
                  alt=""
                  id="AppStore"
                />
              </button>
              <button>
                <img
                  src={`${process.env.PUBLIC_URL}/images/jieyoon/f155b664a93b.png`}
                  alt=""
                  id="googlePlay"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        Meta 소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 인기 계정
        해시태그 위치 Instagram Lite 연락처 업로드 & 비사용자
        <br />
        댄스 식음료 집 및 정원 음악 시각 예술 한국어 © 2022 Instagram from Meta
      </div>
    </div>
  );
};

export default Member;
