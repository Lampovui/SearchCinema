import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  return (
    <Layout.Footer className='bg-red-400 text-center'>
      Ant Design ©{new Date().getFullYear()} Сделано Фоменко
    </Layout.Footer>
  );
};

export default Footer;