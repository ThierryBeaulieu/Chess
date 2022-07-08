import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './MainPage.css';
import ThreeScene from '../threejs/three-scene';

export default function MainPage() {

  return (
    <React.Fragment>
      <ThreeScene />
      <div className='columnSeparator'>
        <div className='columnAlignment'>
          <Link to='/'>
            <div className='MainTitle'>Chess .</div>
          </Link>

          <Link to='/game'>
            <Button name='Play online' />
          </Link>

          <Link to='/training'>
            <Button name='Train yourself' secondary='true' />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}