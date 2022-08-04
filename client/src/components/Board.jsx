import React, { useState } from 'react';
import Tile from './Tile';
import useWindowDimensions from '../tools/WindowSizeHandler';
import { fetchPieces } from '../consts/Pieces';
import { TILE_COLOR } from '../consts/TileColor';

import PiecesRegistry from '../services/PiecesRegistry';
import { BlackPawn, WhitePawn } from './Pieces/Pawn';
import { BlackQueen, WhiteQueen } from './Pieces/Queen';
import { BlackKing, WhiteKing } from './Pieces/King';
import { BlackBishop, WhiteBishop } from './Pieces/Bishop';
import { BlackRook, WhiteRook } from './Pieces/Rook';
import { BlackKnight, WhiteKnight } from './Pieces/Knight';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [deadPieces, setDeadPieces] = useState([]);
  const [boardPieces, setBoardPieces] = useState(fetchPieces());
  const [selected, setSelected] = useState(undefined);

  const COLUMNS = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      COLUMNS || 100;

  const getPieceAt = (x, y) => {
    return boardPieces.filter((piece) => piece.x === x && piece.y === y)[0];
  };

  const handleTileClick = (x, y, piece) => {
    // TODO validate move
    const isValidMove = () => true;

    if (selected !== undefined && isValidMove()) {
      if (piece !== undefined) {
        setDeadPieces([...deadPieces, piece]);
      }

      setBoardPieces(
        boardPieces
          .filter((piece) => piece === piece)
          .map((piece) => {
            if (piece.x === selected.x && piece.y === selected.y) {
              piece.x = x;
              piece.y = y;
            }
            return piece;
          }),
      );

      setSelected(undefined);
    } else if (
      (selected?.x === x && selected?.y === y) ||
      piece === undefined
    ) {
      setSelected(undefined);
    } else {
      setSelected({ x, y, piece });
    }
  };

  const [factories, setFactories] = useState({
    ['BlackPawn']: BlackPawn,
    ['BlackQueen']: BlackQueen,
    ['BlackKing']: BlackKing,
    ['BlackBishop']: BlackBishop,
    ['BlackRook']: BlackRook,
    ['BlackKnight']: BlackKnight,
    ['WhitePawn']: WhitePawn,
    ['WhiteQueen']: WhiteQueen,
    ['WhiteKing']: WhiteKing,
    ['WhiteBishop']: WhiteBishop,
    ['WhiteRook']: WhiteRook,
    ['WhiteKnight']: WhiteKnight,
  });

  const value = {
    factories,
    registerFactory: (pieceName, factory) => {
      setFactories({ ...factories, [pieceName]: factory });
    },
  };

  return (
    <PiecesRegistry.Provider value={value}>
      <div
        style={{
          display: 'grid',
          width: 'fit-content',
          gridTemplateColumns: `repeat(${COLUMNS}, auto)`,
        }}
      >
        {Array.from(Array(COLUMNS).keys())
          .map((_, j, arr) =>
            arr.map((_, i) => {
              const piece = getPieceAt(i, j);
              const isSelected =
                (selected?.x === i && selected?.y === j) || false;
              return (
                <Tile
                  key={`${i}-${j}-${piece?.name}-${isSelected}`}
                  color={(i + j) % 2 ? TILE_COLOR.WHITE : TILE_COLOR.BLACK}
                  cellSize={cellSize}
                  piece={piece}
                  selected={isSelected}
                  onClick={() => handleTileClick(i, j, piece)}
                />
              );
            }),
          )
          .flat()}
      </div>
    </PiecesRegistry.Provider>
  );
}
