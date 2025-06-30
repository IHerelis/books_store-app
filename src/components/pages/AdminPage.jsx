import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {


  return (
    <div className='main-container'>
      <div className='admin-page__container'>
        <h1>This is Admin Page</h1>

        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
