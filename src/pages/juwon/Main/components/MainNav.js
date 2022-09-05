import React from 'react';

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
        <div class="recentSearch">
          <div class="recentTextBox">
            <span class="recentText">Recent</span>
            <span class="clearAll">Clear all</span>
          </div>
          <div class="recentProfileBox">
            <div class="recentProfile" id="recent1">
              <img
                class="recentProfilePic"
                src="/images/juwon/recentPic1.jpeg"
                alt="recentPic1"
              />
              <div class="recentNickBox">
                <div class="recentNickName" />
                <div class="recentName">위코드 짱</div>
              </div>
              <img
                class="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div class="recentProfile" id="recent2">
              <img
                class="recentProfilePic"
                src="/images/juwon/recentPic2.jpeg"
                alt="recentPic2"
              />
              <div class="recentNickBox">
                <div class="recentNickName" />
                <div class="recentName">짱짱맨</div>
              </div>
              <img
                class="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div class="recentProfile" id="recent3">
              <img
                class="recentProfilePic"
                src="/images/juwon/recentPic3.jpeg"
                alt="recentPic3"
              />
              <div class="recentNickBox">
                <div class="recentNickName" />
                <div class="recentName" />
              </div>
              <img
                class="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div class="recentProfile" id="recent4">
              <img
                class="recentProfilePic"
                src="/images/juwon/recentPic4.jpeg"
                alt="recentPic4"
              />
              <div class="recentNickBox">
                <div class="recentNickName" />
                <div class="recentName">CSS 하기싫다</div>
              </div>
              <img
                class="closeBtn"
                src="/images/juwon/closeBig.png"
                alt="closeBig"
              />
            </div>
            <div class="recentProfile" id="recent5">
              <img
                class="recentProfilePic"
                src="/images/juwon/recentPic5.jpeg"
                alt="recentPic5"
              />
              <div class="recentNickBox">
                <div class="recentNickName" />
                <div class="recentName">그쵸?</div>
              </div>
              <img
                class="closeBtn"
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
