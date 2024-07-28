import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Shop from './components/Shop/Shop.jsx';
import Auth from './components/pages/Auth/Auth.jsx';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes.jsx';
import Dashboard from './components/pages/Dashboard/Dashboard.jsx';
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<Shop />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>

    </>
  )
};

export default App;