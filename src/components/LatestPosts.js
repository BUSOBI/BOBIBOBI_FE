import React from 'react';
import Post from './Post';

const LatestPosts = () => {
  const posts = Array(14).fill({
    subject: '수학',
    content: '나시험성인데이클라내가진짜열심히만들었다너희들도이거써봐라이개꿀이다너희가모르는',
    likes: 86,
    views: 1022
  });

  return (
    <div className="latest-posts">
      <h3>최신 글</h3>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default LatestPosts;
