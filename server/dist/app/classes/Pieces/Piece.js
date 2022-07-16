"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.default = Piece;
