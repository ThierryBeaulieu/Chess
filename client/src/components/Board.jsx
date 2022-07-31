import React, { useState } from 'react';
import Tile from './Tile';
import useWindowDimensions from '../tools/WindowSizeHandler';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [deadPieces, setDeadPieces] = useState({ pieces: [] });
  const [piecesOnBoard, setPiecesOnBoard] = useState({
    pieces: [
      {
        name: 'BlackQueen',
        x: 0,
        y: 0,
        isSelected: false,
      },
      {
        name: 'BlackKing',
        x: 0,
        y: 1,
        isSelected: false,
      },
    ],
    isAPieceSelected: false,
  });

  const COLUMNS = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      COLUMNS || 100;

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
              piecesOnBoard={piecesOnBoard}
              setPiecesOnBoard={setPiecesOnBoard}
              deadPieces={deadPieces}
              setDeadPieces={setDeadPieces}
            />
          )),
        )
        .flat()}
    </div>
  );
}
