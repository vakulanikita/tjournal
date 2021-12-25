import React from 'react';
import { NextPage } from 'next';
import { MainLayout } from '../../layouts/main-layout';
import { WriteForm } from '../../components/WriteForm';

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
