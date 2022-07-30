import React from 'react';
import { TestPiece } from './Pieces/TestPiece';
import { useEffect, useState } from 'react';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteRook, BlackRook } from './Pieces/Rook';
import { WhiteKnight, BlackKnight } from './Pieces/Knight';
import { WhiteBishop, BlackBishop } from './Pieces/Bishop';

export default function Tile({
  i,
  j,
  cellSize,
  selectedTile,
  setSelectedTile,
}) {
  const YELLOW_TILE = '#e0de41';
  const BLACK_TILE = '#d0b08a';
  const WHITE_TILE = '#944c18';

  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [currentTile, setCurrentTile] = useState({
    name: 'BlackQueen',
    x: i,
    y: j,
  });
  const [tileColor, setTileColor] = useState({
    white: WHITE_TILE,
    black: BLACK_TILE,
  });

  useEffect(() => {
    if (isMouseHovering) {
      setTileColor({
        white: YELLOW_TILE,
        black: YELLOW_TILE,
      });
    } else {
      setTileColor({
        white: WHITE_TILE,
        black: BLACK_TILE,
      });
    }
  }, [setTileColor, isMouseHovering]);

  const getPiece = (i, j) => {
    if (i === 2 && j === 2) {
      return translatePieceName('BlackQueen');
    } else {
      return null;
    }
  };

  const handleOnClick = () => {
    // verify if there is already a tile selected
    console.log();
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
        backgroundColor: (i + j) % 2 ? tileColor.white : tileColor.black,
      }}
      onMouseEnter={() => setIsMouseHovering(true)}
      onMouseLeave={() => setIsMouseHovering(false)}
      onClick={handleOnClick}
    >
      {getPiece(i, j)}
    </div>
  );
}
