import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost({ posts }) {
  let { postId } = useParams();
  const post = posts.filter((post) => post.postId === Number(postId))[0];

  return (
    <div className="single-post">
      <img src={post.imgUrl} alt={`Post ${postId}`} />
      <h1>Blog post {postId}</h1>
      <h3>{post.author}</h3>
      <p>{post.postContent}</p>
    </div>
  );
}
