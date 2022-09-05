import React from 'react';
import { useState } from 'react';

function CommentBox() {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [postBtn, setPostBtn] = useState('commentPostDisabled');
  const onKeyUp = event => {
    if (inputValue.length === 0) {
      setPostBtn(current => 'commentPostDisabled');
    } else {
      setPostBtn(current => 'commentPostEnabled');
    }
    setInputValue(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (inputValue === '') {
      return;
    }
    setInputValue('');
    setComments(current => [...current, inputValue]);
  };

  return (
    <div className="bottomBottomBox">
      <div className="feedBtnBox">
        <img className="feedBtn" src="/images/juwon/heart.png" alt="heart" />
        <img className="feedBtn" src="/images/juwon/chat.png" alt="chat" />
        <img className="feedBtn" src="/images/juwon/send.png" alt="sned" />
        <img
          className="feedBtn"
          id="saveBtn"
          src="/images/juwon/bookmark.png"
          alt="bookmark"
        />
      </div>
      <div className="likeCountBox">
        <img
          className="likingIcon"
          src="/images/juwon/storyPic3.jpeg"
          alt="likingPic"
        />
        Liked by<span className="likingId">threeballs_s</span>
        <span className="likingId">52 others</span>
      </div>
      <div className="commentBox">
        {comments.map((item, index) => (
          <div className="commentInner" key={index}>
            <span className="commentId">nerdcloud__</span>
            <span className="comment">{item}</span>
            <img
              className="commentDelete"
              src="/images/juwon/close.png"
              alt="close"
            />
            <img
              className="commentHeart"
              src="/images/juwon/heart.png"
              alt="heart"
            />
          </div>
        ))}
      </div>
      <div className="hourAgoBox">
        <span id="agoText">6 HOURS AGO</span>
        <span id="translation">See translation</span>
      </div>
      <form className="commentInputBox" onSubmit={onSubmit}>
        <img className="emoticon" src="/images/juwon/smile.png" alt="smile" />
        <input
          onKeyUp={onKeyUp}
          className="commentInput"
          type="text"
          placeholder="Add a comment..."
        />
        <button className={postBtn}>Post</button>
      </form>
    </div>
  );
}

export default CommentBox;
