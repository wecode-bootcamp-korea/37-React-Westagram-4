function Comment(props) {
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
        <div className="comment-output-text">{props.commentText}</div>
      </div>
      <div className="commentHeart">
        <i className="fa-regular fa-heart" />
        <button className="remove-button">X</button>
      </div>
    </li>
  );
}

export default Comment;
