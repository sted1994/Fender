import React from 'react';
import '../CSS/LandingPage.css';
import { Login } from '../Components/Login';
import { CreateAccount } from '../Components/CreateAccount';

export const LandingPage = () => {
  return (
    <>
      <div className='landingpage'>
        <Login />
        <CreateAccount /> 
      </div>
    </>
  )
}