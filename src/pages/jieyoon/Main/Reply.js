import React from 'react';

const Reply = props => {
  return (
    <div>
      <li>
        <b>jie_yoon </b>
        {props.item}
        <button className="like">
          <i className="fa-solid fa-heart" />
        </button>
        <button className="deleteBtn">삭제하기</button>
      </li>
    </div>
  );
};

export default Reply;
