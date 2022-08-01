import React, { useState } from 'react';
import Tile from './Tile';
import useWindowDimensions from '../tools/WindowSizeHandler';
import fetchPieces from './Pieces/fetchPieces';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [deadPieces, setDeadPieces] = useState({ pieces: [] });
  const [boardPieces, setBoardPieces] = useState(fetchPieces());

  const COLUMNS = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      COLUMNS || 100;

  const getSelectedPiece = () => {
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].isSelected === true) {
        return boardPieces[i];
      }
    }
    return undefined;
  };

  const isTileEmpty = (x, y) => {
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].x === x && boardPieces[i].y === y) {
        return false;
      }
    }
    return true;
  };

  const movePiece = (index, newX, newY) => {
    const boardPiecesUpdated = [];
    for (let i = 0; i < boardPieces.length; i++) {
      if (i === index) {
        boardPieces[i].x = newX;
        boardPieces[i].y = newY;
        boardPiecesUpdated.push(boardPieces[i]);
      } else {
        boardPiecesUpdated.push(boardPieces[i]);
      }
    }
    setBoardPieces(boardPiecesUpdated);
  };

  return (
    <div
      style={{
        display: 'grid',
        width: 'fit-content',
        gridTemplateColumns: `repeat(${COLUMNS}, auto)`,
      }}
    >
      {Array.from(Array(COLUMNS).keys())
        .map((_, i, arr) =>
          arr.map((_, j) => (
            <Tile
              key={`${i}-${j}`}
              indexI={i}
              indexJ={j}
              cellSize={cellSize}
              piecesOnBoard={boardPieces}
              setPiecesOnBoard={setBoardPieces}
              deadPieces={deadPieces}
              setDeadPieces={setDeadPieces}
            />
          )),
        )
        .flat()}
    </div>
  );
}
