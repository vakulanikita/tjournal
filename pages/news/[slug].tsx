import React from 'react';
import { MainLayout } from '../../layouts/main-layout';
import { FullPost } from '../../components/FullPost';
// import { PostComments } from "../../components/PostComments";

export default function Post() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      {/* <PostComments /> */}
    </MainLayout>
  );
}
