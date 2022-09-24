import React from 'react';
import { PostCardGrid } from '../../cards/PostCardGrid';

export const TopicOverview = ({ posts }: any) => {
  return <PostCardGrid posts={posts} />;
};
