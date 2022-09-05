import React, { useState } from 'react';
import ReplyBoard from './ReplyBoard';
import { Link } from 'react-router-dom';
import './Main.scss';

function MainJieyoon() {
  const [reply, setReply] = useState('');
  const [replyArr, setReplyArr] = useState([]);
  const replyCreateBtn = e => {
    e.preventDefault();
    setReplyArr(prev => [...prev, reply]);
    setReply('');
  };

  const liked = e => {
    const like = e.target;
    like.classList.toggle('active');
    like.classList.contains('active')
      ? (like.style.color = 'red')
      : (like.style.color = 'white');
  };
  const deleted = e => {
    e.target.parentNode.remove();
  };

  return (
    <div className="bodyz">
      <header id="header">
        <div id="logo">
          <i className="fa-brands fa-instagram" />
          <span>
            <Link to="/Login/jieyoon">| westagram</Link>
          </span>
        </div>
        <div className="modalMom">
          <input type="text" placeholder="검색" className="search" />
          <div className="modal">
            <div className="friends ">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진2.webp`}
                alt=""
              />
              <div>
                <div className="friendsName">
                  <b>super_man</b>
                </div>
                <div className="friendsWecode">wecode-37기</div>
              </div>
            </div>
            <div className="friends">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진3.webp`}
                alt=""
              />
              <div>
                <div className="friendsName">
                  <b>bet_man</b>
                </div>
                <div className="friendsWecode">wecode-37기</div>
              </div>
            </div>
            <div className="friends">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진4.webp`}
                alt=""
              />
              <div>
                <div className="friendsName">
                  {' '}
                  <b>spider_man</b>
                </div>
                <div className="friendsWecode">wecode-37기</div>
              </div>
            </div>
            <div className="friends">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진5.webp`}
                alt=""
              />
              <div>
                <div className="friendsName">
                  {' '}
                  <b>abctotoro2</b>
                </div>
                <div className="friendsWecode">wecode-37기</div>
              </div>
            </div>
            <div className="friends">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진0.jpeg`}
                alt=""
              />
              <div>
                <div className="friendsName">
                  {' '}
                  <b>mmqkwodw</b>
                </div>
                <div className="friendsWecode">wecode-37기</div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerIcon">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-user" id="modalBtn" />
          <div className="profile">
            <div>
              <p className="profileUnit">프로필</p>
            </div>
            <div>
              <p className="profileUnit">저장됨</p>
            </div>
            <div>
              <p className="profileUnit">설정</p>
            </div>
            <div>
              <p className="profileUnit">계정 전환</p>
            </div>
            <div>
              <p className="profileUnit">로그아웃</p>
            </div>
          </div>
        </div>
      </header>
      <div className="mainFooter">
        <main>
          <div className="mainTop">
            <div className="mainUser">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진1.webp`}
                alt=""
              />
              <span className="userName"> jie_yoon</span>
            </div>
            <div className="mainUserint">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="mainPhoto">
            <img
              src={`${process.env.PUBLIC_URL}/images/jieyoon/사진0.jpeg`}
              alt=""
              className="mainPhotoSize"
            />
          </div>

          <div className="mainFavorite">
            <div>
              <i className="fa-solid fa-heart" />
              <i className="fa-regular fa-comment" style={{ color: 'gray' }} />
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ color: 'gray' }}
              />
            </div>
            <div>
              <i className="fa-regular fa-bookmark" style={{ color: 'gray' }} />
            </div>
          </div>
          <div className="replyFavorite">
            <img
              src={`${process.env.PUBLIC_URL}/images/jieyoon/사진2.webp`}
              alt=""
            />
            <span className="replyName">
              {' '}
              <b>ha_yoon</b>님<b>외 10명</b>이 좋아합니다.
            </span>
          </div>
          <div className="mainReply">
            <ul className="mainReplyUl">
              <li className="replyList">
                <b>ha_yoon</b> 우와
                <button className="like">
                  <i className="fa-solid fa-heart" onClick={liked} />
                </button>
                <button className="deleteBtn" onClick={deleted}>
                  삭제하기
                </button>
              </li>
              <li className="replyList">
                <b>tae_yoon</b> ??
                <button className="like">
                  <i className="fa-solid fa-heart" onClick={liked} />
                </button>
                <button className="deleteBtn" onClick={deleted}>
                  삭제하기
                </button>
              </li>
              <ReplyBoard replyArr={replyArr} liked={liked} deleted={deleted} />
            </ul>
            <p>42분 전</p>
          </div>
          {/* ----------------------------------------------------------------리플----------------------------------------------- */}
          <form className="reply">
            <div className="inputLeft">
              <input
                className="mainReplyCreate"
                type="text"
                placeholder="댓글달기..."
                value={reply}
                onChange={e => setReply(e.target.value)}
              />
              <button
                type="submit"
                className="replyBtn"
                onClick={replyCreateBtn}
              >
                게시
              </button>
              {/* ----------------------------------------------------------------리플----------------------------------------------- */}
            </div>
          </form>
        </main>
        <div className="sideFooter">
          <aside>
            <div className="sideUser">
              <img
                src={`${process.env.PUBLIC_URL}/images/jieyoon/사진6.webp`}
                alt=""
              />
              <div>
                <div className="sideName">
                  {' '}
                  <b>jie_yoon</b>
                </div>
                <div className="sideNameBottom">wecode-37기</div>
              </div>
            </div>
            <div className="sideStory">
              <div className="sideStoryTop">
                <div style={{ color: 'darkgray' }}>스토리</div>
                <div>
                  <b>모두보기</b>
                </div>
              </div>
              <div className="sideStoryBottom">
                <div className="sideStoryUser">
                  <p>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/사진4.webp`}
                      alt=""
                    />
                  </p>
                  <div>
                    <div className="sideUserName">
                      {' '}
                      <b>jang_darem</b>
                    </div>
                    <div
                      className="sideUserNameBottom"
                      style={{ color: 'darkgray' }}
                    >
                      35분 전
                    </div>
                  </div>
                </div>
                <div className="sideStoryUser">
                  <p>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/사진5.webp`}
                      alt=""
                    />
                  </p>
                  <div>
                    <div className="sideUserName">
                      {' '}
                      <b>monmon</b>
                    </div>
                    <div
                      className="sideUserNameBottom"
                      style={{ color: 'darkgray' }}
                    >
                      43분 전
                    </div>
                  </div>
                </div>
                <div className="sideStoryUser">
                  <p>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/사진6.webp`}
                      alt=""
                    />
                  </p>
                  <div>
                    <div className="sideUserName">
                      {' '}
                      <b>Kim_along</b>
                    </div>
                    <div
                      className="sideUserNameBottom"
                      style={{ color: 'darkgray' }}
                    >
                      57분 전
                    </div>
                  </div>
                </div>
                <div className="sideStoryUser">
                  <p>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/jieyoon/다운로드.png`}
                      alt=""
                    />
                  </p>
                  <div>
                    <div className="sideUserName">
                      {' '}
                      <b>shin_janggun</b>
                    </div>
                    <div
                      className="sideUserNameBottom"
                      style={{ color: 'darkgray' }}
                    >
                      57분 전
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sideMembers">
              <div className="sideFriendTop">
                <div style={{ color: 'darkgray' }}>회원님을 위한 추천</div>
                <div>
                  <b>모두보기</b>
                </div>
              </div>
              <div className="sideFriendBottom">
                <div className="sideFriendBottomMember">
                  <div className="sideFollow">
                    <div className="sideFriendUser">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/jieyoon/사진7.webp`}
                        alt=""
                        className="sideFriendUserimg"
                      />
                      <div className="sideBetween">
                        <div className="sideUserName">
                          {' '}
                          <b>Kim_along</b>
                        </div>
                        <div
                          className="sideUserNameBottom"
                          style={{ color: 'darkgray' }}
                        >
                          57분 전
                        </div>
                      </div>
                    </div>
                    <div
                      className="sideFriendBottomFollow"
                      style={{ color: 'rgb(0, 149, 255) ' }}
                    >
                      <b>팔로우</b>
                    </div>
                  </div>
                  <div className="sideFollow">
                    <div className="sideFriendUser">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/jieyoon/사진8.webp`}
                        alt=""
                        className="sideFriendUserimg"
                      />
                      <div className="sideBetween">
                        <div className="sideUserName">
                          {' '}
                          <b>Kim_along</b>
                        </div>
                        <div
                          className="sideUserNameBottom"
                          style={{ color: 'darkgray' }}
                        >
                          57분 전
                        </div>
                      </div>
                    </div>
                    <div
                      className="sideFriendBottomFollow"
                      style={{ color: 'rgb(0, 149, 255) ' }}
                    >
                      <b>팔로우</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <footer>
            westagram 정보 . 지원 . 홍보 센터 . API
            <br /> . 채용정보 . 개인정보처리방침 . 약관
            <br /> . 디렉터리 .프로필 .해시태그 .언어
            <br />
            <br />
            2022 westagram
          </footer>
        </div>
      </div>
    </div>
  );
}

export default MainJieyoon;
