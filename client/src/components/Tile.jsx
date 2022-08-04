import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { TILE_COLOR } from "../consts/TileColor";

import usePiecesRegistry from "../hooks/usePiecesRegistry";

export default function Tile({
  piece,
  cellSize,
  color: defaultColor,
  selected: isSelected,
  onClick: handleOnClick,
}) {
  const [isMouseHovering, setIsMouseHovering] = useState(false);
  const [color, setColor] = useState(undefined);

  useEffect(() => {
    setColor(
      isMouseHovering
        ? TILE_COLOR.YELLOW
        : isSelected
        ? TILE_COLOR.ORANGE
        : undefined
    );
  }, [isMouseHovering, isSelected]);

  const { getPiece } = usePiecesRegistry();
  const Piece = getPiece(piece?.name);

  return (
    <div
      style={{
        height: cellSize,
        width: cellSize,
        backgroundColor: color || defaultColor,
      }}
      onMouseEnter={() => setIsMouseHovering(true)}
      onMouseLeave={() => setIsMouseHovering(false)}
      onClick={() => handleOnClick()}
    >
      {Piece && (
        <Suspense fallback={<div>{piece?.name || "Loading..."}</div>}>
          <Piece width={cellSize} height={cellSize} />
        </Suspense>
      )}
    </div>
  );
}
