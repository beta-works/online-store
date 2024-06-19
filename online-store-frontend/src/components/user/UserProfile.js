import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add additional user profile information */}
      </div>
    </div>
  );
};

export default UserProfile;
