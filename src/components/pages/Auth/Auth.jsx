// import components
import SignUp from '../../SignUp/SignUp';
import Login from '../../Login/Login';

// import modules
import React, { useState } from 'react'

function Auth() {
    const [newUser, setNewUser] = useState(true);

  return (
    <>
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <Login setNewUser={setNewUser} />
      )}
    </>
  );
};

export default Auth