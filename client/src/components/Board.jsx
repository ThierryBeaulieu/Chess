export default function Board() {}

export function drawBoard(canvas, context) {
  const BOARD_WIDTH = canvas.width;
  const BOARD_HEIGHT = canvas.height;

  context.beginPath();
  context.arc(100, 75, 50, 0, 2 * Math.PI);
  context.stroke();
}
