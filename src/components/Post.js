import React from 'react';

const Post = ({ subject, content, likes, views }) => {
  return (
    <div className="post">
      <span className="subject">
        <button className="subject-link" onClick={() => window.location.href = '#'}>{subject}</button>
      </span>
      <span className="content">{content}</span>
      <span className="likes" role="img" aria-label="Likes">❤️ {likes}</span>
      <span className="views" role="img" aria-label="Views">👀 {views}</span>
    </div>
  );
};

export default Post;
