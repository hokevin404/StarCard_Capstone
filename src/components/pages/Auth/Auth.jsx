// import components
import Register from '../../SignUp/SignUp';
import Login from '../../Login/Login';

// import modules
import React, { useState } from 'react'

function Auth() {
    const [newUser, setNewUser] = useState(false);

  return (
    <>
      {newUser ? (
        <Register setNewUser={setNewUser} />
      ) : (
        <Login setNewUser={setNewUser} />
      )};
    </>
  );
};

export default Auth