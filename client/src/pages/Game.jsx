import React from 'react';
import Board from '../components/Board';

import './Game.css';

export default function Game() {
  const containerDims = 600;

  return (
    <div className='wrapper'>
      <Board style={{ height: containerDims, width: containerDims }} />
    </div>
  );
}
