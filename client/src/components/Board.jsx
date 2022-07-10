export function drawBoard(canvas, context) {
  new Board(canvas, context);
}

class Tile {
  x;
  y;
  piece;

  constructor(x, y, piece) {
    this.x = x;
    this.y = y;
    this.piece = piece;
  }
}

class Board {
  TILES_PER_ROW = 8;

  canvas;
  ctx;

  maxWidth;
  maxHeight;

  tileWidth;
  tileHeight;

  indexWidth;
  indexHeight;

  tiles;

  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;

    this.defineDimensions();
    this.initializeTiles();
  }

  initializeTiles() {
    for (let i = 0; i < this.TILES_PER_ROW; i++) {
      for (let j = 0; i < this.TILES_PER_ROW; j++) {
        tiles[i][j] = new Tile();
      }
    }
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
