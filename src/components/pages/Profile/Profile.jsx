import React from 'react';
import UserProfile from '../../UserProfile/UserProfile';
import Shop from '../../Shop/Shop';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../../../context/auth/authContext';

function Profile() {
  const { cookies } = useAuth();

  const decoded = jwtDecode(cookies.token)
  const userid = decoded.user.id;
  const username = decoded.user.username;

  const targetURL = `http://127.0.0.1:3000/api/listings/${userid}`
  return (
    <>
        <div className='profileContainer'>
            <UserProfile userid={userid} username={username}/>
            <div className='profileShop'>
              <Shop targetURL={targetURL} />
            </div>
        </div>
    </>
  )
}

export default Profile