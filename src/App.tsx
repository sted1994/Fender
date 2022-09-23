import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './Views/LandingPage';
import { AccountSetup } from './Views/AccountSetup';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <LandingPage/> }/>
        <Route path='/createAccount' element={ <AccountSetup/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
