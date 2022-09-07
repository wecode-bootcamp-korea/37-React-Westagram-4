import React from 'react';

const ReplyBoard = props => {
  return (
    <div>
      {props.replyArr.map((item, idx) => (
        <li className="replyList" key={idx}>
          <b>jie_yoon </b>
          {item}
          <button className="like">
            <i className="fa-solid fa-heart" onClick={props.liked} />
          </button>
          <button className="deleteBtn" onClick={props.deleted}>
            삭제하기
          </button>
        </li>
      ))}
    </div>
  );
};

export default ReplyBoard;
