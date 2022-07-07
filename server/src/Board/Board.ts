import Piece from '../Pieces/Piece';

class Tile {
  private content: Piece;
  constructor(content: Piece) {
    this.content = content;
  }
  setContent(content: Piece): void {
    this.content = content;
  }
  getContent(): Piece {
    return this.content;
  }
}

export default class Board {
  private tiles: Tile[][];
  constructor(width: number, height: number) {
    this.tiles = new Array(width)
      .fill(null)
      .map(() => new Array(height).fill(null));
  }
}
