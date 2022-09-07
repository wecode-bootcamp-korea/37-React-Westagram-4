import React, { useEffect, useState } from 'react';

import Feed from './Feed';
import MainRight from './MainRight';

import './Main.scss';

function MainJaehyeon() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json()) //res.json()콘솔 찍어보면 promise 출력 됨.
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="MainContainer">
      <div className="Main">
        <div className="nav">
          <div className="nav-menu">
            <div className="nav-left">
              <div className="insta-logo">
                <i className="fa-brands fa-instagram" />
              </div>
              <span>Westagram</span>
            </div>

            <div className="nav-center">
              <input className="search" type="text" placeholder="검색" />
              <div className="rectangular hide" />

              <div className="search-list hide">
                <ul>
                  <li className="search-item">
                    <span className="name">
                      <img
                        src="https://velog.velcdn.com/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                        alt=""
                      />
                      Wecode
                    </span>
                  </li>
                  <li className="search-item">
                    <span className="name">
                      <img
                        src="https://velog.velcdn.com/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                        alt=""
                      />
                      Apple
                    </span>
                  </li>
                  <li className="search-item">
                    <span className="name">
                      <img
                        src="https://velog.velcdn.com/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                        alt=""
                      />
                      JaeHyeon
                    </span>
                  </li>
                  <li className="search-item">
                    <span className="name">
                      <img
                        src="https://velog.velcdn.com/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                        alt=""
                      />
                      withSoju
                    </span>
                  </li>

                  <li className="search-item">
                    <span className="name">
                      <img
                        src="https://velog.velcdn.com/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                        alt=""
                      />
                      withBeer
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right">
              <i className="fa-regular fa-compass" />
              <i className="fa-regular fa-heart" />
              <i className="fa-solid fa-user-large" />

              <ul className="drop-box">
                <li className="drop-list">프로필</li>
                <li className="drop-list">저장됨</li>
                <li className="drop-list">설정</li>
                <li className="drop-list">로그아웃</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="feeds">
            {feedList.map(list => {
              return <Feed key={list.id} list={list} />;
            })}
          </div>
          <MainRight />
        </div>
      </div>
    </div>
  );
}

export default MainJaehyeon;
