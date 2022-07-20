import React from 'react';
import Board from '../components/Board';
import Pawn from '../components/Pieces/Pawn';
import AlternateBoard from '../components/AlternateBoard';
import UnifiedBoard from '../components/UnifiedBoard';
import './Game.css';

export default function Game() {
  return (
    <div className='wrapper'>
      <UnifiedBoard />
    </div>
  );
}
