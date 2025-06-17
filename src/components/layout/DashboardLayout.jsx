import React from 'react';
import SideBar from '../dashboard/SideBar';
import Header from '../dashboard/Header';
import ServicesPage from '../pages/ServicesPage';

const DashboardLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
      <SideBar />

      <div className='flex-1 flex flex-col'>
        <Header />

        <main className='flex-1 p-6 bg-gray-50'>
          <ServicesPage />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
