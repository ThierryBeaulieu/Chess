import React from 'react';
import Board from '../components/Board';
import Pawn from '../components/Pieces/Pawn';
import './Game.css';

export default function Game() {
  return (
    <div className='wrapper'>
      <Board />
      <Pawn />
    </div>
  );
}
