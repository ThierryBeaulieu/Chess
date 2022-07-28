import React from 'react';
import './PlayerForm.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function PlayerForm() {
  return (
    <>
      <div className='bg-card'>
        <div className='card-content'>This is the content of the form</div>
        <Link to='/'>
          <div className='startButton'>
            <Button name='Start' />
          </div>
        </Link>
      </div>
    </>
  );
}
