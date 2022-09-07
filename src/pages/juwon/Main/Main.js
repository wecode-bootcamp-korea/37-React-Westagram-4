import React from 'react';
import FeedPic from './components/FeedPic';
import CommentBox from './components/CommentBox';
import StoryBox from './components/StoryBox';
import MainNav from './components/MainNav';
import SideContents from './components/SideContents';
import './Main.scss';

function MainJuwon() {
  return (
    <body>
      <MainNav />
      <div className="contents">
        <div className="mainBox">
          <div className="story">
            <StoryBox />
          </div>
          <div className="mainContents">
            <FeedPic />
            <CommentBox />
          </div>
        </div>
        <SideContents />
      </div>
    </body>
  );
}

export default MainJuwon;
