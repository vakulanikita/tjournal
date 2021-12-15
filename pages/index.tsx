import Head from 'next/head';

import { Header } from '../components/Header';
import { LeftMenu } from '../components/LeftMenu';
import { Post } from '../components/Post';
import { SideComments } from '../components/SideComments';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <LeftMenu />
        </div>
        <div className="content">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="rightSide">
          <SideComments />
        </div>
      </div>
    </div>
  );
}
