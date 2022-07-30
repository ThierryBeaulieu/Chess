import React from 'react';
import { useState } from 'react';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhiteKnight, BlackKnight } from './Pieces/Queen';
import { WhiteRook, BlackRook } from './Pieces/Queen';
import { TestPiece } from './Pieces/TestPiece';
import useWindowDimensions from '../tools/WindowSizeHandler';
import { useEffect } from 'react';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [isShown, setIsShown] = useState(false);
  const [blackTile, setBlackTile] = useState('#d0b08a');
  const [whiteTile, setWhiteTile] = useState('#944c18');

  const COLUMNS = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      COLUMNS || 100;

  const getPiece = () => {
    return <TestPiece height={cellSize} width={cellSize} />;
  };

  useEffect(() => {
    if (isShown) {
      setBlackTile('orange');
      setWhiteTile('orange');
    } else {
      setBlackTile('#d0b08a');
      setWhiteTile('#944c18');
    }
    console.log(isShown);
  }, [setBlackTile, setWhiteTile, isShown]);

  return (
    <div
      style={{
        display: 'grid',
        width: 'fit-content',
        gridTemplateColumns: `repeat(${COLUMNS}, auto)`,
        //border: '3px solid black',
      }}
    >
      {Array.from(Array(COLUMNS).keys())
        .map((_, i, arr) =>
          arr.map((_, j) => (
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
          )),
        )
        .flat()}
    </div>
  );
}
