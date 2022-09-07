import React, { useState } from 'react';
import './Main.scss';
// const [comment, setComment] = useState('');
// const onChange = event => setComment(event.target.value);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainJinsoo() {
  return (
    <>
      <div className="bar">
        <div className="header">
          <div className="logo-wrapper">
            <span className="logo_2">
              <a
                href="file:///Users/kangjinsoo/Desktop/wecode/westagram/main.html"
                target="_self"
              >
                Westagram
              </a>
            </span>
          </div>
          <span className="search-wrapper">
            <input type="search" placeholder="검색" className="search"></input>
          </span>
          <span className="profile">
            <i className="fa-solid fa-house"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <i className="fa-regular fa-paper-plane"></i>
          </span>
        </div>
      </div>
      <div className="main2">
        <span className="wrapper">
          <div className="story-wrapper">
            <div className="story">
              <ul>
                <li className="storylist">story</li>
                <li className="storylist">story</li>
                <li className="storylist">story</li>
                <li className="storylist">story</li>
              </ul>
            </div>
          </div>
          <div className="feeds">
            <article>
              <div className="feedname">
                <div className="feedicon">
                  <a href="https://www.instagram.com/manchesterunited/">
                    <img
                      src="/images/jinsoo/manchesterunited.png"
                      alt=""
                      className="mark"
                    ></img>
                  </a>
                </div>
                <div className="feedinfo">
                  <div className="first_info">
                    <a href="https://www.instagram.com/manchesterunited/">
                      mancehsterunited
                    </a>
                  </div>
                  <div className="second_info">
                    <a href="https://www.instagram.com/explore/locations/864953374/carrington-training-ground/">
                      Carrington Training Ground
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/jinsoo/tenhag.png"
                  alt=""
                  className="tenhag_picture"
                ></img>
              </div>
            </article>
            <div>하트 말풍선 비행기</div>
            <div>좋아요</div>
            <div>작성자</div>
            <div>댓글</div>
          </div>
        </span>
        <span className="recommend">
          <div className="recommend_name">
            <div className="icon_wrapper">
              <a href="https://www.instagram.com/kangjinsoo___/">
                <img
                  src="/images/jinsoo/instagramprofile.png"
                  alt=""
                  className="tenhag_circle"
                ></img>
              </a>
            </div>
            <div className="icon_wrapper2">
              <a href="https://www.instagram.com/kangjinsoo___/">
                kangjinsoo____
              </a>
            </div>
            <div className="icon_wrapper3">
              <a href="">전환</a>
            </div>
          </div>
          <div className=" tenhag_circle2">
            <div className="foryourecommend">회원님을 위한 추천</div>
            <div className="foryourecommend2">
              <a href="">모두 보기</a>
            </div>
          </div>
          <div className="tenhag_circle3">
            <div className="player">
              <div className="player-img">
                <a href="https://www.instagram.com/sanchooo10/">
                  <img
                    src="/images/jinsoo/sancho.png"
                    alt=""
                    className="sancho"
                  ></img>
                </a>
              </div>
              <div className="player_name">
                <div className="player_name_first">
                  {' '}
                  <a href="https://www.instagram.com/sanchooo10/">
                    jadon_sancho
                  </a>
                </div>
                <div className="player_name_second">회원님을 위한 추천</div>
              </div>
              <div className="follow">
                <a href="" className="follow-link">
                  팔로우
                </a>
              </div>
            </div>
            <div className="player">
              <div className="player-img">
                <a href="https://www.instagram.com/cristiano/">
                  <img
                    src="/images/jinsoo/ronaldo.png"
                    alt=""
                    className="ronaldo"
                  ></img>
                </a>
              </div>
              <div className="player_name">
                <div className="player_name_first">
                  {' '}
                  <a href="https://www.instagram.com/cristiano/">
                    cristiano_ronaldo
                  </a>{' '}
                </div>
                <div className="player_name_second">회원님을 위한 추천</div>
              </div>
              <div className="follow">
                <a href="" className="follow-link">
                  팔로우
                </a>
              </div>
            </div>
            <div className="player">
              <div className="player-img">
                <a href="https://www.instagram.com/raphaelvarane/">
                  <img
                    src="/images/jinsoo/varane.png"
                    alt=""
                    className="varane"
                  ></img>
                </a>
              </div>
              <div className="player_name">
                <div className="player_name_first">
                  {' '}
                  <a href="https://www.instagram.com/raphaelvarane/">
                    {' '}
                    raphael_varane{' '}
                  </a>
                </div>
                <div className="player_name_second">회원님을 위한 추천</div>
              </div>
              <div className="follow">
                <a href="" className="follow-link">
                  팔로우
                </a>
              </div>
            </div>
            <div className="player">
              <div className="player-img">
                <a href="https://www.instagram.com/donnyvdbeek/">
                  <img
                    src="/images/jinsoo/van de beek.png"
                    alt=""
                    className="vandebeek"
                  ></img>
                </a>
              </div>
              <div className="player_name">
                <div className="player_name_first">
                  {' '}
                  <a href="https://www.instagram.com/donnyvdbeek/">
                    {' '}
                    van_de_beek{' '}
                  </a>
                </div>
                <div className="player_name_second">회원님을 위한 추천</div>
              </div>
              <div className="follow">
                <a href="" className="follow-link">
                  팔로우
                </a>
              </div>
            </div>
            <div className="add">
              <ul className="addlist">
                <li className="addlistalign">소개 </li>
                <li className="addlistalign">도움말 </li>
                <li className="addlistalign">홍보 샌터 </li>
                <li className="addlistalign">API </li>
                <li className="addlistalign">채용 정보 </li>
                <li className="addlistalign">개인정보처리방침 </li>
                <li className="addlistalign">약관 </li>
                <li className="addlistalign">위치 </li>
                <li className="addlistalign">언어 </li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default MainJinsoo;
