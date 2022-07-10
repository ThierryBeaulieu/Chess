export function drawBoard(canvas, context) {
  const board = new Board(canvas, context);
  board.draw();
}

class Board {
  canvas;
  ctx;

  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.ctx.lineWidth = 10;
  }

  draw() {
    // draw a red line
    this.ctx.beginPath();
    this.ctx.moveTo(100, 100);
    this.ctx.lineTo(300, 100);
    this.ctx.stroke();
  }
}
