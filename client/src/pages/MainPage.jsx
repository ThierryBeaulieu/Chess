import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import './MainPage.css';
import ThreeScene from '../threejs/three-scene.jsx';
import gameService from '../services/game.service';
import { useCookies } from 'react-cookie';

export default function MainPage() {
  const [cookies] = useCookies(['user']);

  function verifyPlayerExist() {
    const playerId = cookies.sessionId;
    if (playerId !== null && playerId !== undefined) {
      const playerData = gameService.getPlayerData(playerId);
      if (playerData !== null && playerData !== undefined) {
        return (
          <Link to='/game'>
            <Button name='Play online' />
          </Link>
        );
      }
    }

    return (
      <Link to='/playerform'>
        <Button name='Play online' />
      </Link>
    );
  }

  return (
    <React.Fragment>
      <ThreeScene />
      <div className='columnSeparator'>
        <div className='columnAlignment'>
          <Link to='/'>
            <div className='MainTitle'>Chess .</div>
          </Link>
          {verifyPlayerExist()}
        </div>
      </div>
    </React.Fragment>
  );
}
