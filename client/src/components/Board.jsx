import React from 'react';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhiteKnight, BlackKnight } from './Pieces/Queen';
import { WhiteRook, BlackRook } from './Pieces/Queen';
import useWindowDimensions from '../tools/WindowSizeHandler';

export default function Board({ style }) {
  const BLACK_TILE = '#895331';
  const WHITE_TILE = '#ddc8a6';

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const columns = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      columns || 100;

  const getPiece = () => {
    return <BlackQueen height={cellSize} width={cellSize} />;
  };

  return (
    <div
      style={{
        display: 'grid',
        width: 'fit-content',
        gridTemplateColumns: `repeat(${columns}, auto)`,
        border: '2px solid black',
        borderRadius: '4px',
      }}
    >
      {Array.from(Array(columns).keys())
        .map((_, i, arr) =>
          arr.map((_, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                height: cellSize,
                width: cellSize,
                backgroundColor: (i + j) % 2 ? WHITE_TILE : BLACK_TILE,
              }}
            >
              {getPiece()}
            </div>
          )),
        )
        .flat()}
    </div>
  );
}
