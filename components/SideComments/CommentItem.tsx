import React from 'react';
import styles from './SideComments.module.scss';
import NextLink from 'next/link';

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
  };
  text: string;
  post: {
    id: number;
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
          alt="User avatar"
        />
        <NextLink href={`/profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </NextLink>
      </div>
      <p className={styles.text}>{text}</p>
      <NextLink href={`/news/${user.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </NextLink>
    </div>
  );
};
