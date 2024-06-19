import React from 'react';
import UserProfile from '../components/user/UserProfile';
import OrderHistory from '../components/user/OrderHistory';

const UserProfilePage = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile />
      <OrderHistory />
    </div>
  );
};

export default UserProfilePage;
