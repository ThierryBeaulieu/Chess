import Piece from './Piece';

class King extends Piece {
  constructor(x: number, y: number) {
    const name = 'King';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
