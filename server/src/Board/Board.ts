class Tile {
  constructor() {}
}

export default class Board {
  tiles: Tile[][];
  constructor(width: number, height: number) {
    this.tiles = new Array(width).fill(0).map(() => new Array(height).fill(0));
  }

  printContent() {
    console.log(this.tiles[5][5]);
  }
}
