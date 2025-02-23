import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Shop from './components/Shop/Shop.jsx';
import Auth from './components/pages/Auth/Auth.jsx';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes.jsx';
import Dashboard from './components/pages/Dashboard/Dashboard.jsx';
import Profile from './components/pages/Profile/Profile.jsx';

function App() {
  const targetURL = 'http://127.0.0.1:3000/api/listings';

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<Shop targetURL={targetURL}/>} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>

    </>
  )
};

export default App;