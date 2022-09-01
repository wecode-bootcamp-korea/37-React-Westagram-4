import React, { useState } from 'react';
import Comment from './Comment';
import './Main.scss';

function MainJaehyeon() {
  let [comment, setComment] = useState(['와 너무 멋지다']);
  let [commentValue, setCommentValue] = useState('');
  return (
    <div className="Mainc">
      <div className="MainContainer">
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
            <article>
              <div className="feed-title">
                <div className="profile">
                  <div className="profile-logo" />
                  <div className="idText">profile</div>
                </div>
                <div className="feed-title-right">
                  <i className="fa-brands fa-free-code-camp" />
                </div>
              </div>
              <div className="feed-image">
                <img
                  src="https://images.unsplash.com/photo-1660866838314-4ece130b4776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="hi"
                />
              </div>
            </article>
            <div className="feed-footer">
              <div className="footer-top">
                <div>
                  <i className="fa-solid fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div>클립</div>
              </div>
              <div>
                <span className="idText">Ronnie</span> 님 외 1명이 좋아합니다
              </div>
              <div className="comments-output-box">
                <ul className="comments">
                  {comment.map((value, i) => {
                    return <Comment key={value} commentText={value} />;
                    // key를 index로 받아도 되지만 스트링으로 받는 것을 권장함.
                  })}
                </ul>
              </div>
            </div>
            <div className="comment-box">
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
                onChange={e => {
                  setCommentValue(e.target.value);
                }}
                value={commentValue}
                onKeyPress={e => {
                  setCommentValue(e.target.value);
                  if (e.key === 'Enter' && commentValue.trim().length > 0) {
                    let copy = [...comment];
                    copy.push(commentValue);
                    setComment(copy);
                    setCommentValue('');
                  }
                }}
              />
              <button
                onClick={() => {
                  if (commentValue.trim().length > 0) {
                    let copy = [...comment];
                    copy.push(commentValue);
                    setComment(copy);
                    setCommentValue('');
                  }
                }}
              >
                게시
              </button>
            </div>
          </div>
          <div className="main-right">
            <div className="main-right-top">
              <div className="top-profile">
                <img
                  src="https://images.unsplash.com/photo-1660878561965-b8ce1342c507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>
              <div className="top-profile-text">
                <span className="idText">JaeHyeon_wecode</span>

                <span>Wecode | 위코드</span>
              </div>
            </div>
            <div className="main-right-mid">
              <div className="main-right-title">
                <div>스토리</div>
                <div>모두 보기</div>
              </div>
              <div className="recom-list">
                <div className="recom-box">
                  <div className="img-box">
                    <img src="/images/jaehyeon/profile.jpg" alt="" />
                  </div>
                  <div>
                    <span className="idText">JaeHyeon_wecode</span>
                    <br />
                    <span>Wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="recom-list">
                <div className="recom-box">
                  <div className="img-box">
                    <div>
                      <img src="/images/jaehyeon/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <span className="idText">JaeHyeon_wecode</span>
                    <br />
                    <span>Wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="recom-list">
                <div className="recom-box">
                  <div className="img-box">
                    <div>
                      <img src="/images/jaehyeon/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <span id="name" className="idText">
                      JaeHyeon_wecode
                    </span>
                    <br />
                    <span>Wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="recom-list">
                <div className="recom-box">
                  <div className="img-box">
                    <div>
                      <img src="/images/jaehyeon/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <span className="idText">JaeHyeon_wecode</span>
                    <br />
                    <span>Wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="recom-list">
                <div className="recom-box">
                  <div className="img-box">
                    <div>
                      <img src="./images/profile.jpg" alt="" />
                    </div>
                  </div>
                  <div>
                    <span className="idText">JaeHyeon_wecode</span>
                    <br />
                    <span>Wecode | 위코드</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right-bot">
              <div className="bot-title">
                <div>회원님을 위한 추천</div>
                <div id="show-more">모두 보기</div>
              </div>
              <div className="mr-bot-box">
                <div className="recom-img-box">
                  <img
                    className="recom-img"
                    src="https://images.unsplash.com/photo-1660474220980-4727894eec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
                    alt=""
                  />
                </div>
                <div className="recom-txt-box">
                  <span className="idText">Crong</span>
                  <br />
                  <span>who loves panguin</span>
                </div>
              </div>
              <div className="mr-bot-box">
                <div className="recom-img-box">
                  <img
                    className="recom-img"
                    src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZ3VpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div className="recom-txt-box">
                  <span className="idText">Pororo</span>
                  <br />
                  <span>who loves rizard</span>
                </div>
              </div>
              <div className="mr-bot-box">
                <div className="recom-img-box">
                  <img
                    className="recom-img"
                    src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYXIlMjBiZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div className="recom-txt-box">
                  <span className="idText">Phobi</span>
                  <br />
                  <span>북극의 왕 glorious king Phobi</span>
                </div>
              </div>
              <div className="mr-bot-box">
                <div className="recom-img-box">
                  <img
                    className="recom-img"
                    src="https://images.unsplash.com/photo-1659968652648-9ec33df989d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div className="recom-txt-box">
                  <span className="idText">Boradori</span>
                  <br />
                  <span>the forgotten king..</span>
                </div>
              </div>
              <div className="mr-bot-box">
                <div className="recom-img-box">
                  <img
                    className="recom-img"
                    src="https://velog.velcdn.com/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png"
                    alt=""
                  />
                </div>
                <div className="recom-txt-box">
                  <span className="idText">Wecode</span>
                  <br />
                  <span>Welcome to heaven of coders</span>
                </div>
              </div>
            </div>
            <div>
              <div className="info">
                Westagram 정보 지원 홍보센터 API 채용정보 개인정보처리방침 약관
                디렉터리 프로필 해시태그 언어
              </div>
              <div className="info">C 2019 INSTAGRAM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainJaehyeon;
