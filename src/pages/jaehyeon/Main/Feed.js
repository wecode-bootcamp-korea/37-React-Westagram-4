import React, { useEffect, useState } from 'react';
import Comment from './Comment';

function Feed({ list }) {
  let [comment, setComment] = useState([]);
  let [commentValue, setCommentValue] = useState('');
  const [isLike, setIsLike] = useState([false]);
  const [heart, setHeart] = useState([isLike]);

  function changeBtnDisabled() {
    if (commentValue.trim().length > 0) {
      let copy = [...comment];
      copy.push(commentValue);
      setComment(copy);
      setCommentValue('');
    }
  }
  function handleComment(e) {
    if (e.key === 'Enter' && commentValue.trim().length > 0) {
      let copy = [...comment];
      copy.push(commentValue);
      setComment(copy);
      console.log(e.target);
      setCommentValue('');
    }
  }

  return (
    <div className="feed">
      <article>
        <div className="feed-title">
          <div className="profile">
            <div
              className="profile-logo"
              style={{
                backgroundImage: 'url(' + list.userImg + ')',
              }}
            />
            <div className="idText">{list.userName}</div>
          </div>
          <div className="feed-title-right">
            <i className="fa-brands fa-free-code-camp" />
          </div>
        </div>
        <div className="feed-image">
          <img src={list.feedImg} alt="hi" />
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
              return (
                <Comment
                  i={i}
                  key={i}
                  //key를 value로 줬더니 key 중복 에러남.
                  commentValue={value}
                  comment={comment}
                  setComment={setComment}
                  isLike={isLike}
                  setIsLike={setIsLike}
                  heart={heart}
                  setHeart={setHeart}
                />
              );
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
            console.log(e.nativeEvent);
          }}
          value={commentValue}
          onKeyPress={handleComment}
        />
        <button onClick={changeBtnDisabled}>게시</button>
      </div>
    </div>
  );
}

export default Feed;

// {
//   /* <Comment
//                   key={item.id}
//                   i={item.id}
//                   //key를 value로 줬더니 key 중복 에러남.
//                   visitorImg={item.visitorImg}
//                   visitorName={item.visitorName}
//                   commentValue={item.visitorComment}
//                   // comment={comment}
//                   // setComment={setComment}
//                   isLike={isLike}
//                   setIsLike={setIsLike}
//                   heart={heart}
//                   setHeart={setHeart}
//                 /> */
// }
