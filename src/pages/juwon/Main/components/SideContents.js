import React from 'react';

function SideContents() {
  return (
    <div className="innerRightBox">
      <div className="rightTopBox">
        <div className="profileIcon">
          <img
            className="bigProfileImg"
            src="/images/juwon/Screen Shot 2022-08-16 at 11.12.53 AM.png"
            alt="bigProfileIcon"
          />
        </div>
        <div className="myNickName">nerdcloud__</div>
        <div className="switchBtn">Switch</div>
      </div>
      <div className="rightMiddleBox">
        <div className="suggestion">
          <span id="suggestion">Suggestions For You</span>
          <span id="seeAll">See All</span>
        </div>
        <div className="suggestionList">
          <div className="suggestions">
            <div className="suIconBox">
              <img
                className="suIcon"
                src="/images/juwon/suIcon1.jpeg"
                alt="suIcon1"
              />
            </div>
            <div className="suNickBox">
              <div className="suNick">yy__y333</div>
              <div className="suText">Suggested for you</div>
            </div>
            <div className="followBox">Follow</div>
          </div>
          <div className="suggestions">
            <div className="suIconBox">
              <img
                className="suIcon"
                src="/images/juwon/suIcon2.jpeg"
                alt="suIcon2"
              />
            </div>
            <div className="suNickBox">
              <div className="suNick">viktor_ward16</div>
              <div className="suText">Suggested for you</div>
            </div>
            <div className="followBox">Follow</div>
          </div>
          <div className="suggestions">
            <div className="suIconBox">
              <img
                className="suIcon"
                src="/images/juwon/suIcon3.jpeg"
                alt="suIcon3"
              />
            </div>
            <div className="suNickBox">
              <div className="suNick">letmelove_urthings</div>
              <div className="suText">Suggested for you</div>
            </div>
            <div className="followBox">Follow</div>
          </div>
          <div className="suggestions">
            <div className="suIconBox">
              <img
                className="suIcon"
                src="/images/juwon/suIcon4.jpeg"
                alt="suIcon4"
              />
            </div>
            <div className="suNickBox">
              <div className="suNick">jhyun_ta</div>
              <div className="suText">Suggested for you</div>
            </div>
            <div className="followBox">Follow</div>
          </div>
          <div className="suggestions">
            <div className="suIconBox">
              <img
                className="suIcon"
                src="/images/juwon/suIcon5.jpeg"
                alt="suIcon5"
              />
            </div>
            <div className="suNickBox">
              <div className="suNick">ppp__p.2.2</div>
              <div className="suText">Suggested for you</div>
            </div>
            <div className="followBox">Follow</div>
          </div>
        </div>
      </div>
      <div className="rightBottomBox">
        <div className="links">
          <a>About </a>· <a>Help </a>· <a>Press </a>· <a>API </a>·<a>Jobs </a>·{' '}
          <a>Privacy </a>· <a>Terms </a>· <a>Location </a>·<a>Language </a>
        </div>
        <div className="company">@ 2022 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
}

export default SideContents;
