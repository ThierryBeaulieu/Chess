import React from 'react';
import './PlayerForm.css';
import Button from '../components/Button';
import { useState } from 'react';

export default function PlayerForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`This was submited (${fname}) and (${lname})`);
    alert(`This was submited (${fname}) and (${lname})`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='bg-card'>
          <div className='card-content'>
            <h1>Player's info</h1>
            <label>First name</label>
            <input
              onChange={handleFnameChange}
              type='text'
              maxLength='150'
              required
            />
            <label>Last name</label>
            <input
              onChange={handleLnameChange}
              type='text'
              maxLength='150'
              required
            />
          </div>

          <div className='startButton'>
            <Button name='Start' type='submit' value='Submit' />
          </div>
        </div>
      </form>
    </>
  );
}
