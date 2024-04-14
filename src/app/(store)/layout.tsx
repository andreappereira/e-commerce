import React, { ReactNode } from 'react';
import { Header } from 'src/components/header';

type StoreLayoutProps = {
  children: ReactNode;
};

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => (
  <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
    <Header />
    {children}
  </div>
);

export default StoreLayout;
