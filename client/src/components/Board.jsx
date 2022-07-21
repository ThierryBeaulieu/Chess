import React from 'react';
import Pawn from './pieces/Pawn';

export default () => {
  const cellSize = 100;
  const columns = 8;

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
              <Pawn height={cellSize} width={cellSize} />
            </div>
          )),
        )
        .flat()}
    </div>
  );
};
