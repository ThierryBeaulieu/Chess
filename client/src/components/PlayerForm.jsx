import React from 'react';
import './PlayerForm.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function PlayerForm() {
  return (
    <>
      <div className='bg-card'>
        <div className='card-content'>
          <h1>Player's info</h1>
          <label>First name</label>
          <input type='text' required />
          <label>Last name</label>
          <input type='text' required />
        </div>

        <Link to='/'>
          <div className='startButton'>
            <Button name='Start' />
          </div>
        </Link>
      </div>
    </>
  );
}
