import React from "react";
import PropTypes from 'prop-types';
import "./posts.css"

export default function Posts({ posts }) {
  return (
    <div className="content">
      {posts.map(post =>
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p className="author">Author id: {post.userId}</p>
          <p className="body">{post.body}</p>
        </div>
      )}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      body: PropTypes.body,
      title: PropTypes.string.isRequired,
      
    })
  ).isRequired
}