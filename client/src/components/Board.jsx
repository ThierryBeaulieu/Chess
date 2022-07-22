import React from 'react';
import Pawn from './Pieces/Pawn';
import King from './Pieces/King';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import useWindowDimensions from './tools/WindowSizeHandler';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const columns = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      columns || 100;

  return (
    <div
      style={{
        display: 'grid',
        width: 'fit-content',
        gridTemplateColumns: `repeat(${columns}, auto)`,
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
                backgroundColor: (i + j) % 2 ? '#005c7b' : '#dfdfdf',
              }}
            >
              <WhiteQueen height={cellSize} width={cellSize} />
            </div>
          )),
        )
        .flat()}
    </div>
  );
}
