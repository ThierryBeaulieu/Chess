class Tile {
  constructor() {}
}

export default class Board {
  tiles: Tile[][];
  constructor(width: number, height: number) {
    this.tiles = new Array(width)
      .fill(null)
      .map(() => new Array(height).fill(null));
  }
}
