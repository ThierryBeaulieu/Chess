import React from 'react';
import './PlayerForm.css';
import Button from '../components/Button';
import { useState } from 'react';
import gameService from '../services/game.service';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function PlayerForm() {
  const navigate = useNavigate();
  const [cookies] = useCookies(['user']);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const currentCookie = cookies.sessionId;
    try {
      const requestState = await gameService.setUserInfo(
        fname,
        lname,
        currentCookie,
      );
      if (requestState === undefined) {
        alert('A player already exists');
      }
    } catch (e) {}
    navigate('/game');
  }

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
