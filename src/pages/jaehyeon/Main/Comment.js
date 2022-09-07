// import { useState } from 'react';
// import './Comment.scss';
import profile from '../../../assets/jaehyeon/profile.jpg';

function Comment({
  commentValue,
  comment,
  setComment,
  i,
  isLike,
  setIsLike,
  heart,
  setHeart,
  visitorName,
  visitorImg,
}) {
  return (
    <li className="comment">
      <div className="comment-item">
        <div className="comment-profile">
          <img src={visitorImg ? visitorImg : profile} alt="" />
        </div>
        <span className="idText">{visitorName ? visitorName : 'Jaehyeon'}</span>
        <div className="comment-output-text">{commentValue}</div>
      </div>
      <div className="commentHeart">
        <i
          className={isLike[i] ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
          onClick={() => {
            let copy = [...isLike];
            copy[i] = !copy[i];
            setIsLike(copy);
          }}
        />
        <button
          className="remove-button"
          disabled={!visitorImg ? false : true}
          onClick={() => {
            let copy = [...comment];
            copy.splice(i, 1);
            setComment(copy);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default Comment;
