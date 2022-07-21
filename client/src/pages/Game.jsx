import React from 'react';
import Board from '../components/Board';

import './Game.css';

export default function Game() {
  const containerDims = undefined;

  return (
    <div>
      <Board
        style={{ maxHeight: 500, height: containerDims, width: containerDims }}
      />
    </div>
  );
}
