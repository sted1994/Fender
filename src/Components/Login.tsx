import React from 'react';
import {useState} from 'react';
import '../CSS/Login.css'


export const Login = () => {

  const [userLoginName, setUserLoginName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <section className="landingpage-section">
      Already a Menber?
      <div className='login-inputs-container'>
        <div className='login-inputs'>
          <label>Username</label>
          <input placeholder="Please Enter Username" onChange={(e) => {setUserLoginName(e.target.value)}}/>
        </div>
        <div className='login-inputs'>
          <label>Password</label>
          <input placeholder="Please Enter Password" onChange={(e) => {setUserPassword(e.target.value)}}/>
        </div>
      </div>
      <button>Login</button>
    </section>
  )
}