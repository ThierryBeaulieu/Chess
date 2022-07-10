export function drawBoard(canvas, context) {
  new Board(canvas, context);
}

class Tile {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
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
    this.drawTiles();
  }

  defineDimensions() {
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.maxWidth;

    this.indexWidth = this.maxWidth / 20;
    this.indexHeight = this.indexWidth;

    this.tileWidth = (this.maxWidth - this.indexWidth) / 8;
    this.tileHeight = this.tileWidth;
  }

  drawTile(x, y, width, height, color) {
    this.ctx.fillStyle = `${color}`;
    this.ctx.fillRect(x, y, width, height);
  }

  drawTiles() {
    this.drawTile(10, 10, this.tileWidth, this.tileHeight, '#222228');
  }
}
