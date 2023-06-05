import React from 'react';
import { Footer, Header } from 'src/components';
import { Outlet } from 'react-router-dom';

export const MainLayouts: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
