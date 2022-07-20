import React from 'react';
import Board from '../components/Board';
import Pawn from '../components/Pieces/Pawn';
import AlternateBoard from '../components/AlternateBoard';
import UnifiedBoard from '../components/UnifiedBoard';
import './Game.css';

export default function Game() {
  const boardWidth = window.width;
  const boardHeight = window.height;

  return (
    <div>
      <UnifiedBoard width={boardWidth} height={boardHeight} />
    </div>
  );
}
