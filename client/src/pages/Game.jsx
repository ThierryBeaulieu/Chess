import React from 'react';
import Board from '../components/Board';
import Pawn from '../components/pieces/Pawn';
import AlternateBoard from '../components/AlternateBoard';
import UnifiedBoard from '../components/ChrisBoard';

import './Game.css';

export default function Game() {
  return (
    <div>
      <UnifiedBoard />
    </div>
  );
}
