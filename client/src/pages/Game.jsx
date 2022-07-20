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
  const { width, height } = useWindowDimensions();
  let windowSize = { width: width * 0.7, height: height * 0.7 };
  // TODO: Use directly the width and the height property inside the unified board
  // object.
  return (
    <div>
      <UnifiedBoard windowDimensions={windowSize} />
    </div>
  );
}
