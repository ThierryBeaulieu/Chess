import React, { useState } from 'react';
import MousePosition from './tools/MousePosition';
import { WhitePawn, BlackPawn } from './Pieces/Pawn';
import { WhiteKing, BlackKing } from './Pieces/King';
import { WhiteQueen, BlackQueen } from './Pieces/Queen';
import { WhiteKnight, BlackKnight } from './Pieces/Queen';
import { WhiteRook, BlackRook } from './Pieces/Queen';
import useWindowDimensions from './tools/WindowSizeHandler';

export default function Board({ style }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const columns = 8;
  const cellSize =
    Math.min(style?.width || windowWidth, style?.height || windowHeight) /
      columns || 100;
  const mousePos = MousePosition();

  // TODO: Verify if the use

  // If the user click once on a piece, he can choose where to place it
  // If the user drag the piece, he can place it somewhere else
  // If the user double-click on a piece, he can place it elsewhere

  const [draggedItem, setDraggedItem] = useState({
    posX: mousePos.x,
    posY: mousePos.y,
    currentItem: null,
  });

  const getPiece = (indexX, indexY) => {
    const index = {
      x: indexX,
      y: indexY,
    };

    return (
      <BlackQueen
        height={cellSize}
        width={cellSize}
        index={index}
        mousePos={mousePos}
        draggedItem={draggedItem}
        setDraggedItem={setDraggedItem}
      />
    );
  };

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
              {getPiece(i, j)}
            </div>
          )),
        )
        .flat()}
    </div>
  );
}
