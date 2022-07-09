import React from 'react';
import './Game.css';

function Tile() {
  return 'hello';
}

function Board({ body }) {
  return (
    <table>
      <tbody>
        {body.map((tableRow) => (
          <tr>
            {tableRow.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Game() {
  const BLACK_ROW = ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'];
  const WHITE_ROW = ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'];
  const BOARD_COLORS = [
    WHITE_ROW,
    BLACK_ROW,
    WHITE_ROW,
    BLACK_ROW,
    WHITE_ROW,
    BLACK_ROW,
    WHITE_ROW,
    BLACK_ROW,
  ];
  return <Board body={BOARD_COLORS} />;
}
