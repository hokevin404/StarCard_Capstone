import React from 'react'
import { useAuth } from '../../../context/auth/authContext';

function Dashboard() {
  const { logout }  = useAuth();

  function handleClick() {
    logout();
  }

  return (
    <div>
        <h1>Only Users Should See This Page</h1>
        <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Dashboard;