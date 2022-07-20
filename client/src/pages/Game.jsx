import React from 'react';
import Board from '../components/Board';
import Pawn from '../components/Pieces/Pawn';
import AlternateBoard from '../components/AlternateBoard';
import UnifiedBoard from '../components/UnifiedBoard';
import { useState, useEffect } from 'react';

import './Game.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Game() {
  const windowHeight = window.innerHeight * 0.5;
  const windowWidth = window.innerWidth * 0.5;

  return (
    <div>
      <UnifiedBoard width={windowHeight} height={windowWidth} />
    </div>
  );
}
