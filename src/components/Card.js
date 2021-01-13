import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ options }) {
  return (
    <div>
      <Link to={`/${options.postId}`}>
        <img src={options.imgUrl} alt={`Post with id ${options.postId}`} />
      </Link>
      <h1>{options.postTitle}</h1>
      <h3>{options.author}</h3>
      <p>{options.postContent}</p>
    </div>
  );
}
