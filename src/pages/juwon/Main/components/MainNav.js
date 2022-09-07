import React from 'react';
import './MainNav.scss';

function MainNav() {
  return (
    <nav className="topBox">
      <div className="westagram">
        <p>Westagram</p>
        <img className="arrow" src="/images/juwon/arrow.png" alt="arrow" />
      </div>
      <div className="searchInputBox">
        <input
          className="searchInput"
          type="text"
          placeholder="       Search"
        />
        <div className="recentSearch">
          <div className="recentTextBox">
            <span className="recentText">Recent</span>
            <span className="clearAll">Clear all</span>
          </div>
          <div className="recentProfileBox">
            <div className="recentProfile" id="recent1">
              <img
                className="recentProfilePic"
                src="/images/juwon/recentPic1.jpeg"
                alt="recentPic1"
              />
              <div className="recentNickBox">
                <div className="recentNickName" />
                <div className="recentName">위코드 짱</div>
              </div>
              <img
                className="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div className="recentProfile" id="recent2">
              <img
                className="recentProfilePic"
                src="/images/juwon/recentPic2.jpeg"
                alt="recentPic2"
              />
              <div className="recentNickBox">
                <div className="recentNickName" />
                <div className="recentName">짱짱맨</div>
              </div>
              <img
                className="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div className="recentProfile" id="recent3">
              <img
                className="recentProfilePic"
                src="/images/juwon/recentPic3.jpeg"
                alt="recentPic3"
              />
              <div className="recentNickBox">
                <div className="recentNickName" />
                <div className="recentName" />
              </div>
              <img
                className="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div className="recentProfile" id="recent4">
              <img
                className="recentProfilePic"
                src="/images/juwon/recentPic4.jpeg"
                alt="recentPic4"
              />
              <div className="recentNickBox">
                <div className="recentNickName" />
                <div className="recentName">CSS 하기싫다</div>
              </div>
              <img
                className="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div className="recentProfile" id="recent5">
              <img
                className="recentProfilePic"
                src="/images/juwon/recentPic5.jpeg"
                alt="recentPic5"
              />
              <div className="recentNickBox">
                <div className="recentNickName" />
                <div className="recentName">그쵸?</div>
              </div>
              <img
                className="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <img id="homeBtn" src="/images/juwon/home (1).png" alt="home" />
        <img src="/images/juwon/send.png" alt="send" />
        <img src="/images/juwon/more.png" alt="more" />
        <img src="/images/juwon/direction.png" alt="direction" />
        <img src="/images/juwon/heart.png" alt="heart" />
        <img
          id="profile"
          src="/images/juwon/Screen Shot 2022-08-16 at 11.12.53 AM.png"
          alt="navProfilePic"
        />
      </div>
      <div className="navMenuBox">
        <div className="navMenuInnerBox">
          <img className="MenuIcon" src="/images/juwon/user.png" alt="user" />
          <p>Profile</p>
        </div>
        <div className="navMenuInnerBox">
          <img
            className="MenuIcon"
            src="/images/juwon/ribbon.png"
            alt="ribbon"
          />
          <p>Saved</p>
        </div>
        <div className="navMenuInnerBox">
          <img
            className="MenuIcon"
            src="/images/juwon/settings.png"
            alt="setttings"
          />
          <p>Settings</p>
        </div>
        <div className="navMenuInnerBox">
          <img
            className="MenuIcon"
            src="/images/juwon/change.png"
            alt="change"
          />
          <p>Switch accounts</p>
        </div>
        <div className="navMenuInnerBox" id="logout">
          <p>Log Out</p>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
