import React from 'react';
import { TestPiece } from './Pieces/TestPiece';
import { useEffect, useState } from 'react';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteRook, BlackRook } from './Pieces/Rook';
import { WhiteKnight, BlackKnight } from './Pieces/Knight';
import { WhiteBishop, BlackBishop } from './Pieces/Bishop';

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

  const getPiece = (i, j) => {
    if (i === 2 && j === 2) {
      return translatePieceName('BlackQueen');
    } else {
      return null;
    }
  };

  const translatePieceName = (pieceName) => {
    switch (pieceName) {
      case 'BlackPawn':
        return <BlackPawn height={cellSize} width={cellSize} />;
      case 'BlackQueen':
        return <BlackQueen height={cellSize} width={cellSize} />;
      case 'BlackKing':
        return <BlackKing height={cellSize} width={cellSize} />;
      case 'BlackBishop':
        return <BlackBishop height={cellSize} width={cellSize} />;
      case 'BlackRook':
        return <BlackRook height={cellSize} width={cellSize} />;
      case 'BlackKnight':
        return <BlackKnight height={cellSize} width={cellSize} />;
      case 'WhitePawn':
        return <WhitePawn height={cellSize} width={cellSize} />;
      case 'WhiteQueen':
        return <WhiteQueen height={cellSize} width={cellSize} />;
      case 'WhiteKing':
        return <WhiteKing height={cellSize} width={cellSize} />;
      case 'WhiteBishop':
        return <WhiteBishop height={cellSize} width={cellSize} />;
      case 'WhiteRook':
        return <WhiteRook height={cellSize} width={cellSize} />;
      case 'WhiteKnight':
        return <WhiteKnight height={cellSize} width={cellSize} />;
      case 'TestPiece':
        return <TestPiece height={cellSize} width={cellSize} />;
      default:
        return undefined;
    }
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
      {getPiece(i, j)}
    </div>
  );
}
