import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, Tabs, Tab } from '@material-ui/core';

import { MainLayout } from '../layouts/main-layout';
import { FollowButton } from '../components/FollowButton';
import { Api } from '../utils/api';
import { NextPage } from 'next';
import { ResponseUser } from '../utils/api/types';

interface RatingPageProps {
  users: ResponseUser[];
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
  return (
    <MainLayout>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography style={{ fontSize: 15 }}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам
          месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За всё время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell component="th" scope="row">
                  <span className="mr-15">{obj.id}</span>
                  {obj.fullName}
                </TableCell>
                <TableCell align="right">{obj.commentsCount * 2}</TableCell>
                <TableCell align="right">
                  <FollowButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll();
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      users: null,
    },
  };
};

export default Rating;
