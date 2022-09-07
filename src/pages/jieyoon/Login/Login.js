import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginJieyoon() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  if (localStorage.getItem('token')) {
    navigate('/Main/jieyoon');
  }

  const isEmail = email => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };
  const MemberShip = async e => {
    e.preventDefault();

    if (!isEmail(userId)) {
      alert('이메일 형식을 지켜주세요');
      return;
    } else if (userPassword < 8) {
      alert('패스워드는 8자 이상입니다.');
    } else {
      await fetch('http://10.58.2.26:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ email: userId, password: userPassword }),
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('백엔드 실수');
        })
        .catch(error => console(error))
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
            alert('백엔드 때매 느렸지만 내가해냈다');
            navigate('/Main/jieyoon');
          } else {
            alert('백엔드 실수가 잦다.');
          }
        });
    }
  };

  const isValid = userId.length > 0 && userPassword.length > 0;

  return (
    <div className="bodys">
      <div className="container">
        <div className="center">
          <div className="Photo">
            <img
              src={`${process.env.PUBLIC_URL}/images/jieyoon/8e9224a71939.png`}
              alt=""
              id="instarPhoTo2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/jieyoon/80b8aebdea57.png`}
              alt=""
              id="instarPhoTo"
            />
          </div>
          <div className="main">
            <div id="login">
              <div className="title">westagram</div>
              <form className="loginForm" onSubmit={MemberShip}>
                <input
                  type="text"
                  placeholder="전화번호,사용자 이름 또는 이메일"
                  className="userId"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="userPassword"
                  value={userPassword}
                  onChange={e => setUserPassword(e.target.value)}
                />
                <br />
                <button
                  type="submit"
                  className="loginBtn"
                  disabled={!isValid}
                  style={{
                    background: isValid ? 'skyBlue' : 'rgb(244, 244, 244)',
                  }}
                >
                  로그인
                </button>
                <button
                  type="submit"
                  className="loginBtn"
                  disabled={!isValid}
                  style={{
                    background: isValid ? 'skyBlue' : 'rgb(244, 244, 244)',
                  }}
                >
                  로그인
                </button>
              </form>

              <div className="dotLine">
                <hr />
                또는
                <hr />
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25221yrfxys17pod7zxefw77g1wmnl1azggks7augky1jpc6yz179s9j3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9b7b9dab-7e23-46c5-8710-ffd57679c531%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221yrfxys17pod7zxefw77g1wmnl1azggks7augky1jpc6yz179s9j3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                  <i className="fa-brands fa-square-facebook"> </i> Facebook으로
                  로그인
                </a>
              </div>
              <div className="passCheck">
                <Link to="/Member">비밀번호를 잊으셨나요?</Link>
              </div>
            </div>

            <div className="idCreate">
              계정이 없으신가요?<Link to="/Member/jieyoon"> 가입하기</Link>
            </div>
            <div className="App">
              <div className="AppDown">앱을 다운로드 하세요.</div>
              <div className="AppImg">
                <button>
                  <a href="https://www.apple.com/kr/app-store/">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/4a5c9d62d51b.png`}
                      alt=""
                      id="AppStore"
                    />
                  </a>
                </button>
                <button>
                  <a href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-kr-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700058439438733_creativeid_477136209358_device_c&gclid=Cj0KCQjwr4eYBhDrARIsANPywCglqaubfPOCWBP7UBki-LuvdjXOBkOrg9lIcs_htQpMw5OEYmTK1EkaAqozEALw_wcB&gclsrc=aw.ds">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/f155b664a93b.png`}
                      alt=""
                      id="googlePlay"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          Meta 소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 인기 계정
          해시태그 위치 Instagram Lite 연락처 업로드 비사용자
          <br />
          댄스 식음료 집 및 정원 음악 시각 예술 한국어 © 2022 Instagram from
          Meta
        </div>
      </div>
    </div>
  );
}

export default LoginJieyoon;
