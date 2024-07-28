import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Shop from './components/Shop/Shop.jsx';
import Auth from './components/pages/Auth/Auth.jsx';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route element={<Banner />} />
        <Route element={<Shop />} />
      </Routes>

    </>
  )
};

export default App;