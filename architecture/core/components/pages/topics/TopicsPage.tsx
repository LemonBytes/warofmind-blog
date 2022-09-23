import React from 'react';
import { PostCardGrid } from '../../cards/PostCardGrid';

export const TopicsPage = ({ posts }: any) => {
  return <PostCardGrid posts={posts} />;
};
