import React from 'react';
import NextLink from 'next/link'
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <NextLink href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </NextLink>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <NextLink href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </NextLink>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
        />
        <ArrowBottom />
      </div>
    </Paper>
  );
};
