export function drawBoard(canvas, context) {
  new Board(canvas, context);
}

class Board {
  canvas;
  ctx;

  maxWidth;
  maxHeight;

  tileWidth;
  tileHeight;

  indexWidth;
  indexHeight;

  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;

    this.defineDimensions();
    this.drawIndex();
    this.drawTiles();
  }

  unblurry(number) {
    const offset = 0.5;
    const roundedNb = Math.round(number);
    return roundedNb + offset;
  }

  defineDimensions() {
    this.maxWidth = this.unblurry(this.canvas.width);
    this.maxHeight = this.maxWidth;

    this.indexWidth = this.unblurry(this.maxWidth / 20);
    this.indexHeight = this.indexWidth;

    this.tileWidth = this.unblurry((this.maxWidth - this.indexWidth) / 8);
    this.tileHeight = this.tileWidth;
  }

  drawIndex() {
    this.ctx.lineWidth = 1.0;
    this.ctx.beginPath();
    this.ctx.moveTo(this.indexWidth, 0);
    this.ctx.lineTo(this.indexWidth, this.maxHeight - this.indexHeight);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.indexWidth, this.maxHeight - this.indexHeight);
    this.ctx.lineTo(this.maxWidth, this.maxHeight - this.indexHeight);
    this.ctx.stroke();
  }

  drawTiles() {}
}
