import React from 'react';
import { TestPiece } from './Pieces/TestPiece';
import { useEffect, useState } from 'react';

export default function Tile({ i, j, cellSize }) {
  const YELLOW_TILE = '#e0de41';
  const BLACK_TILE = '#d0b08a';
  const WHITE_TILE = '#944c18';

  const [isShown, setIsShown] = useState(false);
  const [blackTile, setBlackTile] = useState('#d0b08a');
  const [whiteTile, setWhiteTile] = useState('#944c18');

  useEffect(() => {
    if (isShown) {
      setBlackTile(YELLOW_TILE);
      setWhiteTile(YELLOW_TILE);
    } else {
      setBlackTile(BLACK_TILE);
      setWhiteTile(WHITE_TILE);
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
