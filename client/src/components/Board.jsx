import React, { useState } from "react";
import Tile from "./Tile";
import useWindowDimensions from "../tools/WindowSizeHandler";
import { fetchPieces } from "../consts/Pieces";
import { TILE_COLOR } from "../consts/TileColor";

import PiecesRegistry from "../services/PiecesRegistry";

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

    if (
      selected !== undefined &&
      selected.x !== x &&
      selected.y !== y &&
      isValidMove()
    ) {
      if (piece !== undefined) {
        setDeadPieces([...deadPieces, piece]);
      }

      setBoardPieces(
        boardPieces
          .filter((p) => p !== piece)
          .map((p) => {
            if (p.x === selected.x && p.y === selected.y) {
              p.x = x;
              p.y = y;
            }
            return p;
          })
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
    BlackPawn: React.lazy(() => import("../components/Pieces/BlackPawn")),
    BlackQueen: React.lazy(() => import("../components/Pieces/BlackQueen")),
    BlackKing: React.lazy(() => import("../components/Pieces/BlackKing")),
    BlackBishop: React.lazy(() => import("../components/Pieces/BlackBishop")),
    BlackRook: React.lazy(() => import("../components/Pieces/BlackRook")),
    BlackKnight: React.lazy(() => import("../components/Pieces/BlackKnight")),
    WhitePawn: React.lazy(() => import("../components/Pieces/WhitePawn")),
    WhiteQueen: React.lazy(() => import("../components/Pieces/WhiteQueen")),
    WhiteKing: React.lazy(() => import("../components/Pieces/WhiteKing")),
    WhiteBishop: React.lazy(() => import("../components/Pieces/WhiteBishop")),
    WhiteRook: React.lazy(() => import("../components/Pieces/WhiteRook")),
    WhiteKnight: React.lazy(() => import("../components/Pieces/WhiteKnight")),
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
          display: "grid",
          width: "fit-content",
          gridTemplateColumns: `repeat(${COLUMNS}, auto)`,
        }}
      >
        {Array.from(Array(COLUMNS).keys()).map((_, j, arr) =>
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
          })
        )}
      </div>
    </PiecesRegistry.Provider>
  );
}
