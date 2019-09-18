import React, { Component } from "react";

import Comment from "./Comment";

class PostItem extends Component {
  postItemHeader(props) {
    const { author, date } = props;

    return (
      <div className="postItemHeader">
        <img src={author.avatar} alt="author" />
        <div className="postItemHeaderDetails">
          <span className="postItemName">{author.name}</span>
          <span className="postItemDate">{date}</span>
        </div>
      </div>
    );
  }

  postItemComments(props) {
    const { comments } = props;

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ));
  }

  render() {
    const { author, date, content, comments } = this.props.post;

    return (
      <div className="postItem">
        {this.postItemHeader({ author, date })}
        <p>{content}</p>
        {this.postItemComments({ comments })}
      </div>
    );
  }
}

export default PostItem;
