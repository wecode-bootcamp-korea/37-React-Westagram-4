import React from 'react';
import { useState } from 'react';

function FeedPic() {
  return (
    <>
      <div className="bottomTopBox">
        <img
          className="feedPofileIcon"
          src="/images/juwon/storyPic3.jpeg"
          alt="myProfilePic"
        />
        <div className="feedNick">kyu90</div>
        <img
          className="feedMenuIcon"
          src="/images/juwon/option.png"
          alt="option"
        />
      </div>
      <div className="bottomMiddleBox" />
    </>
  );
}

export default FeedPic;
