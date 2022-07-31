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
  piecesOnBoard,
  setPiecesOnBoard,
  deadPieces,
  setDeadPieces,
}) {
  const YELLOW_TILE = '#e0de41';
  const BLACK_TILE = '#d0b08a';
  const WHITE_TILE = '#944c18';
  const ORANGE_TILE = 'orange';

  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [currentTile, setCurrentTile] = useState(undefined);
  const [tileColor, setTileColor] = useState({
    white: WHITE_TILE,
    black: BLACK_TILE,
  });

  useEffect(() => {
    console.log(piecesOnBoard);
    handleTileColor(isMouseHovering, setTileColor);
    handleCurrentTile(piecesOnBoard);
  }, [setTileColor, isMouseHovering, piecesOnBoard, setPiecesOnBoard]);

  const handleCurrentTile = (piecesOnBoard) => {
    piecesOnBoard?.map((piece) => {
      if (piece.x === i && piece.y === j) {
        setCurrentTile(updatePiece(piece.name, piece.x, piece.y, false));
      }
    });
  };

  const handleTileColor = (isMouseHovering, setTileColor) => {
    if (isMouseHovering) {
      setTileColor({
        white: YELLOW_TILE,
        black: YELLOW_TILE,
      });
    } else if (currentTile?.isSelected) {
      setTileColor({
        white: ORANGE_TILE,
        black: ORANGE_TILE,
      });
    } else {
      setTileColor({
        white: WHITE_TILE,
        black: BLACK_TILE,
      });
    }
  };

  const getPiece = () => {
    return translatePieceName(currentTile?.name);
  };

  const isThisPieceInCurrentTile = (piece) => {
    return (
      piece?.x === currentTile?.x &&
      piece?.y === currentTile?.y &&
      piece?.name === currentTile?.name
    );
  };

  const updatePiece = (newName, posX, posY, selectedState) => {
    return {
      name: newName,
      x: posX,
      y: posY,
      isSelected: selectedState,
    };
  };

  const isCurrentTileEmpty = () => {
    return currentTile === undefined;
  };

  const updateDeadPieces = (newDeadPiece) => {
    const deadPiecesUpdated = [];
    deadPieces.map((deadPiece) => {
      deadPiecesUpdated.push(deadPiece);
    });
    deadPiecesUpdated.push(newDeadPiece);
    setDeadPieces(deadPiecesUpdated);
  };

  const isSelected = (piece) => {
    return piece?.isSelected === true;
  };

  const handleOnClick = () => {
    // verify if other pieces were selected before
    const boardPiecesUpdated = [];
    let isAPieceSelected = false;

    piecesOnBoard.map((piece) => {
      if (isSelected(piece)) {
        isAPieceSelected = true;
        if (isThisPieceInCurrentTile()) {
          boardPiecesUpdated.push(
            updatePiece(piece.name, piece.x, piece.y, false),
          );
        } else {
          if (!isCurrentTileEmpty()) {
            boardPiecesUpdated.push(
              updatePiece(piece.name, currentTile.x, currentTile.y, false),
            );
            updateDeadPieces(currentTile);
          } else {
            boardPiecesUpdated.push(updatePiece(piece.name, i, j, false));
          }
        }
      }
    });

    if (!isAPieceSelected) {
      if (!isCurrentTileEmpty()) {
        boardPiecesUpdated.push(
          updatePiece(currentTile.name, currentTile.x, currentTile.y, true),
        );
      }
    }

    setPiecesOnBoard(boardPiecesUpdated);
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
