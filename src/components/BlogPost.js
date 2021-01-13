import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  let { postId } = useParams();

  return (
    <div>
      <h1>Blog post {postId}</h1>
    </div>
  );
}
