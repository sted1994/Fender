import React from 'react';
import '../CSS/CreateAccount.css'
import { Link } from 'react-router-dom';

export const CreateAccount = () => {
  return (
    <section className="landingpage-section">
      Create an Account
      <div className='create-account-background'>
        Join The Comunity
      </div>
      <Link to='/createAccount'><button>Create Free Account</button></Link>
    </section>
  )
}