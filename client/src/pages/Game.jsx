import React from 'react';
import Board from '../components/Board';
import './Game.css';

const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = ({ data }) => {
  console.log('message from server', data);
};

socket.onopen = () => {
  console.log('hello world');
};

export default function Game() {
  const containerDims = 600;

  return (
    <div className='wrapper'>
      <Board style={{ height: containerDims, width: containerDims }} />
    </div>
  );
}
