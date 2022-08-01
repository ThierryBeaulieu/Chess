import React, { useState } from 'react';
import Tile from './Tile';
import useWindowDimensions from '../tools/WindowSizeHandler';
import fetchPieces from './Pieces/fetchPieces';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [deadPieces, setDeadPieces] = useState([]);
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

  const getPiece = (x, y) => {
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].x === x && boardPieces[i].y === y) {
        return boardPieces[i];
      }
    }
    return undefined;
  };

  const movePiece = (index, newX, newY) => {
    if (!isTileEmpty(newX, newY)) {
      const newDeadPiece = getPiece(newX, newY);
      setDeadPieces((prevDeadPieces) => [
        ...prevDeadPieces.pieces,
        newDeadPiece,
      ]);
    }

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
              boardPieces={boardPieces}
              movePiece={movePiece}
              getSelectedPiece={getSelectedPiece}
            />
          )),
        )
        .flat()}
    </div>
  );
}
