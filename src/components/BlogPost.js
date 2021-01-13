import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

export default function BlogPost({ posts }) {
  let { postId } = useParams();
  const post = posts.filter((post) => post.postId === Number(postId))[0];

  return (
    <div className="blog-post">
      <div className="blog-post__content">
        <img src={post.imgUrl} alt={`Post ${postId}`} />
        <div className="blog-post__header">
          <h2>{post.postTitle}</h2>
        </div>
        <h4>
          piše: <span>{post.author} </span>
        </h4>
        <p>{post.postContent}</p>
      </div>
    </div>
  );
}
