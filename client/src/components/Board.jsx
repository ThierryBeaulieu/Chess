import React, { useState } from 'react';
import Tile from './Tile';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhiteKnight, BlackKnight } from './Pieces/Queen';
import { WhiteRook, BlackRook } from './Pieces/Queen';
import useWindowDimensions from '../tools/WindowSizeHandler';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [piecesOnBoard, setPiecesOnBoard] = useState([
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
  ]);

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
              i={i}
              j={j}
              cellSize={cellSize}
              piecesOnBoard={piecesOnBoard}
              setPiecesOnBoard={setPiecesOnBoard}
            />
          )),
        )
        .flat()}
    </div>
  );
}
