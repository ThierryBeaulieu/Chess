import React, { useState } from 'react';
import Tile from './Tile';
import useWindowDimensions from '../tools/WindowSizeHandler';
import { fetchPieces, fetchTestPieces } from './Pieces/fetchPieces';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [deadPieces, setDeadPieces] = useState([]);
  const [boardPieces, setBoardPieces] = useState(fetchTestPieces());

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

  const resetAllSelectedPieces = () => {
    const outOfRangeIndex = -1;
    setSelectedPiece(outOfRangeIndex, outOfRangeIndex);
  };

  const setSelectedPiece = (x, y) => {
    const boardPiecesUpdated = [];
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].x === x && boardPieces[i].y === y) {
        boardPieces[i].isSelected = true;
        const boardPieceUpdated = boardPieces[i];
        boardPiecesUpdated.push(boardPieceUpdated);
      } else {
        boardPieces[i].isSelected = false;
        const boardPieceUpdated = boardPieces[i];
        boardPiecesUpdated.push(boardPieceUpdated);
      }
    }
    setBoardPieces(boardPiecesUpdated);
  };

  const removePiece = (x, y) => {
    const boardPiecesUpdated = [];
    let pieceToRemove = undefined;
    for (let i = 0; i < boardPieces.length; i++) {
      const piece = boardPieces[i];
      if (piece.x !== x && piece.y !== y) {
        boardPiecesUpdated.push(piece);
      } else {
        pieceToRemove = piece;
      }
    }
    setBoardPieces(boardPiecesUpdated);
    return pieceToRemove;
  };

  const addDeadPiece = (x, y) => {
    if (!isTileEmpty(x, y)) {
      const newDeadPiece = getPiece(x, y);
      setDeadPieces([...deadPieces, newDeadPiece]);
      console.log(removePiece(x, y));
      return true;
    } else {
      return false;
    }
  };

  const movePiece = (oldX, oldY, newX, newY) => {
    addDeadPiece(newX, newY);

    const boardPiecesUpdated = [];
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].x === oldX && boardPieces[i].y === oldY) {
        boardPieces[i].x = newX;
        boardPieces[i].y = newY;
        const boardPieceUpdated = boardPieces[i];
        boardPiecesUpdated.push(boardPieceUpdated);
      } else {
        const boardPieceUpdated = boardPieces[i];
        boardPiecesUpdated.push(boardPieceUpdated);
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
              setSelectedPiece={setSelectedPiece}
              resetAllSelectedPieces={resetAllSelectedPieces}
            />
          )),
        )
        .flat()}
    </div>
  );
}
