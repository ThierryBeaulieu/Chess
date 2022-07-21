import React from 'react';
import Board from '../components/Board';

import './Game.css';

export default function Game() {
  const containerDims = 600;

  return (
    <div>
      <Board style={{ height: containerDims, width: containerDims }} />
    </div>
  );
}
