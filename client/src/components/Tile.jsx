import React from 'react';
import { useEffect, useState } from 'react';
import getPiece from './Pieces/getPiece';

const TILE_COLOR = {
  YELLOW: '#e0de41',
  BLACK: '#d0b08a',
  WHITE: '#944c18',
  ORANGE: 'orange',
};

export default function Tile({
  indexI,
  indexJ,
  cellSize,
  boardPieces,
  movePiece,
  getSelectedPiece,
}) {
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [currentPiece] = useState(initCurrentPiece());
  const [tileColor, setTileColor] = useState({
    white: TILE_COLOR.WHITE,
    black: TILE_COLOR.BLACK,
  });

  useEffect(() => {
    const handleTileColor = () => {
      if (currentPiece?.isSelected) {
        setTileColor({
          white: TILE_COLOR.ORANGE,
          black: TILE_COLOR.ORANGE,
        });
      } else if (isMouseHovering) {
        setTileColor({
          white: TILE_COLOR.YELLOW,
          black: TILE_COLOR.YELLOW,
        });
      } else {
        setTileColor({
          white: TILE_COLOR.WHITE,
          black: TILE_COLOR.BLACK,
        });
      }
    };
    handleTileColor();
  }, [isMouseHovering, currentPiece]);

  const handleOnClick = () => {};

  function initCurrentPiece() {
    for (let i = 0; i < boardPieces.length; i++) {
      if (boardPieces[i].x === indexI && boardPieces[i].y === indexJ) {
        const pieces = {
          name: boardPieces[i].name,
          x: boardPieces[i].x,
          y: boardPieces[i].y,
          isSelected:
            boardPieces[i]?.isSelected !== undefined
              ? boardPieces[i].isSelected
              : false,
        };
        return pieces;
      }
    }
  }

  return (
    <div
      key={`${indexI}-${indexJ}`}
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor:
          (indexI + indexJ) % 2 ? tileColor.white : tileColor.black,
      }}
      onMouseEnter={() => setIsMouseHovering(true)}
      onMouseLeave={() => setIsMouseHovering(false)}
      onClick={handleOnClick}
    >
      {getPiece(currentPiece?.name, cellSize, cellSize)}
    </div>
  );
}
