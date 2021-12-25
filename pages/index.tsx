import { Post } from '../components/Post';
import { MainLayout } from '../layouts/main-layout';
import { Api } from '../utils/api';
import { NextPage } from 'next';
import { PostItem } from '../utils/api/types';

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  console.log(posts);
  return (
    <MainLayout>
      {posts.map((obj) => (
        <Post key={obj.id} id={obj.id} title={obj.title} description={obj.description} />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
