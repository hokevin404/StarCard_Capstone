import React, { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Shop from './components/Shop/Shop.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Shop />
    </>
  )
};

export default App;