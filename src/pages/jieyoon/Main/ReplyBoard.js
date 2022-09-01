import React from 'react';
import Reply from './Reply';

const ReplyBoard = props => {
  console.log(typeof props.replyArr);
  // console.log("reply text:", props.replyArr);

  return (
    <>
      {props.replyArr.map(item => (
        <Reply item={item} />
      ))}
    </>
  );
};

export default ReplyBoard;
