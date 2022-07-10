import React, { useRef, useEffect } from 'react';
import './Canvas.css';
import { drawBoard } from './Board';

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvasDimensions(canvas);

    const context = canvas.getContext('2d');
    contextRef.current = context;

    drawBoard(canvas, context);
  }, []);

  function setCanvasDimensions(canvas) {
    const SCREEN_ESTATE = 1.5; // change canvas size
    const ANTI_BLURRY_RATIO = 2; // change pixel density

    const windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    if (windowSize.width > windowSize.height) {
      canvas.width = windowSize.height * SCREEN_ESTATE;
      canvas.height = windowSize.height * SCREEN_ESTATE;
    } else {
      canvas.width = windowSize.width * SCREEN_ESTATE;
      canvas.height = windowSize.width * SCREEN_ESTATE;
    }
    canvas.style.width = `${canvas.width / ANTI_BLURRY_RATIO}px`;
    canvas.style.height = `${canvas.height / ANTI_BLURRY_RATIO}px`;
  }

  function select() {}

  function unselect() {}

  function move() {}

  return (
    <canvas
      onMouseDown={select}
      onMouseUp={unselect}
      onMouseMove={move}
      ref={canvasRef}
    ></canvas>
  );
}

export default Canvas;
