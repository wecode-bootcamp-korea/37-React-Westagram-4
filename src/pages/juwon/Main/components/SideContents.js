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
          {FOOTER_INFO_LIST.map(el => (
            <a id={el.id} link={el.link} key={el.id}>
              · {el.text}
            </a>
          ))}
        </div>
        <div className="company">@ 2022 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
}

export default SideContents;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.instagram.com/', text: 'About' },
  { id: 1, link: 'https://help.instagram.com/', text: 'Help' },
  { id: 1, link: 'https://about.instagram.com/blog/', text: 'Press' },
  {
    id: 1,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API',
  },
  { id: 1, link: 'https://about.instagram.com/about-us/careers', text: 'Jobs' },
  {
    id: 1,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: 'Privacy',
  },
  { id: 1, link: 'https://help.instagram.com/581066165581870', text: 'Terms' },
  {
    id: 1,
    link: 'https://www.instagram.com/explore/locations/',
    text: 'Location',
  },
  { id: 1, link: 'https://about.instagram.com/', text: 'Language' },
];
