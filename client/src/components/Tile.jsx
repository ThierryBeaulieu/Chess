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
    handleTileColor(isMouseHovering, setTileColor);
    handleCurrentTile(piecesOnBoard);
  }, [setTileColor, isMouseHovering, piecesOnBoard, setPiecesOnBoard]);

  const handleCurrentTile = (piecesOnBoard) => {
    piecesOnBoard?.map((piece) => {
      if (piece?.x === i && piece?.y === j) {
        const currentPiece = {
          name: piece.name,
          x: piece.x,
          y: piece.y,
          isSelected: false,
        };
        setCurrentTile(currentPiece);
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

  const handleOnClick = () => {
    // verify if other pieces were selected before
    const boardPiecesUpdated = [];
    let isAPieceSelected = false;
    const deadPiece = undefined;

    piecesOnBoard.map((piece) => {
      if (piece?.isSelected === true) {
        isAPieceSelected = true;
        // The piece selected is the current tile
        if (piece?.x === currentTile?.x && piece?.y === currentTile?.y) {
          const pieceInNewState = {
            name: piece.name,
            x: piece.x,
            y: piece.y,
            isSelected: false,
          };
          boardPiecesUpdated.push(pieceInNewState);
        } else {
          // The piece selected is different from the one we currently have
          // The selected piece will take the place of the current piece
          if (currentTile !== undefined) {
            const pieceReplaced = {
              name: piece.name,
              x: currentTile.x,
              y: currentTile.y,
              isSelected: false,
            };
            // The piece that will be replace becomes a dead piece
            deadPiece = currentTile;
            boardPiecesUpdated.push(pieceReplaced);
            // The old piece is not added
          } else {
            const samePieceNewPosition = {
              name: piece.name,
              x: i,
              y: j,
              isSelected: false,
            };
            boardPiecesUpdated.push(samePieceNewPosition);
          }
        }
      } else {
        if (
          currentTile?.name !== piece.name ||
          currentTile?.x !== piece.x ||
          currentTile?.y !== piece.y
        ) {
          boardPiecesUpdated.push(piece);
        }
      }

      // set the currentPiece activates
      if (!isAPieceSelected) {
        if (currentTile !== undefined) {
          const currentPieceActivated = {
            name: currentTile.name,
            x: currentTile.x,
            y: currentTile.y,
            isSelected: true,
          };
          boardPiecesUpdated.push(currentPieceActivated);
        } else {
          // we can't select a tile that doesn't contain any pieces
        }
      }
    });
    setPiecesOnBoard(boardPiecesUpdated);
    const newDeadPieces = [];
    deadPieces.map((piece) => {
      newDeadPieces.push(piece);
    });
    newDeadPieces.push(deadPiece);
    setDeadPieces(newDeadPieces);
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
