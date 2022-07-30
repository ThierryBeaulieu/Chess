import React from 'react';
import { TestPiece } from './Pieces/TestPiece';
import { useEffect, useState } from 'react';

export default function Tile({ i, j, cellSize }) {
  const [isShown, setIsShown] = useState(false);
  const [blackTile, setBlackTile] = useState('#d0b08a');
  const [whiteTile, setWhiteTile] = useState('#944c18');

  useEffect(() => {
    if (isShown) {
      setBlackTile('orange');
      setWhiteTile('orange');
    } else {
      setBlackTile('#d0b08a');
      setWhiteTile('#944c18');
    }
  }, [setBlackTile, setWhiteTile, isShown]);

  const getPiece = () => {
    return <TestPiece height={cellSize} width={cellSize} />;
  };

  return (
    <div
      key={`${i}-${j}`}
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor: (i + j) % 2 ? whiteTile : blackTile,
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {getPiece()}
    </div>
  );
}
