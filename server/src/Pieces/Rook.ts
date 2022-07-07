import Piece from './Piece';

class Rook extends Piece {
  constructor(x: number, y: number) {
    const name = 'Rook';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
