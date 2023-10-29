import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useAuth } from "../AuthContext";

function BlogDetail() {
  const [comment, setComment] = useState("");
  const { user,jsonData } = useAuth();
  const { id } = useParams();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jsonData[id].comments.push({author:user.username,content:comment});
    setComment("");
  };
  return (
    <div>
      <Header />
      <div className="blog-detail-container">
        <div className="blog-body">
          <h1>{jsonData[id].title}</h1>
          <p>{jsonData[id].description}</p>
        </div>

        <div className="comment-form">
          <h2>Add a Comment</h2>
          <form id="commentForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={handleCommentChange}
              required
            />
            <button type="submit">Submit Comment</button>
          </form>
        </div>

        <h2>Comments</h2>
        <ul className="comment-list" id="commentList">
        {jsonData[id].comments.map((item) => (
            <li id={item.key}>
            <article className="blog-card">
              <h4>{item.author}</h4>
              <p>
                {item.content}
              </p>
            </article>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogDetail;
