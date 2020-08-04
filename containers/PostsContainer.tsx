import React from 'react';

interface PostsContainerProps {
  slug: string;
}

const PostsContainer: React.FC<PostsContainerProps> = ({ slug }) => {
  return <div>Hello, Post slug: {slug}</div>;
};

export default PostsContainer;
