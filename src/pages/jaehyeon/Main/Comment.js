// import { useState } from 'react';
// import './Comment.scss';

function Comment({
  commentValue,
  comment,
  setComment,
  i,
  isLike,
  setIsLike,
  heart,
  setHeart,
}) {
  return (
    <li className="comment">
      <div className="comment-item">
        <div className="comment-profile">
          <img
            src="https://images.unsplash.com/photo-1660878561965-b8ce1342c507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <span className="idText">JaeHyeon</span>
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
