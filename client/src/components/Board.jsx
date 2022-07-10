export function drawBoard(canvas, context) {
  new Board(canvas, context);
}

class Board {
  canvas;
  ctx;

  maxWidth;
  maxHeight;

  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;

    this.maxHeight = this.canvas.height;
    this.maxWidth = this.canvas.width;

    this.drawSides();
    this.drawTiles();
  }

  drawSides() {
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.maxWidth / 8, 0);
    this.ctx.lineTo(this.maxHeight / 8, this.maxHeight);
    this.ctx.stroke();
  }

  drawTiles() {}
}
