import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Shop from './components/Shop/Shop.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Banner />} />
        <Route element={<Shop />} />
      </Routes>

    </>
  )
};

export default App;