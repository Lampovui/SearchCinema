import React from 'react';
import { Layout } from 'antd';

const Header = () => {
  return (
    <Layout.Header className='bg-red-400 h-12'>
      <div className='flex justify-between h-full items-center'>
        <div className='flex justify-between gap-1 items-center'>
          <div className='inline text-white text-2xl'>Фильмы</div>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;