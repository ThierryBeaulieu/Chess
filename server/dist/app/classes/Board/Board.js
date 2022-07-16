"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tile {
    constructor() { }
}
class Board {
    constructor(width, height) {
        this.tiles = new Array(width)
            .fill(null)
            .map(() => new Array(height).fill(null));
    }
}
exports.default = Board;
