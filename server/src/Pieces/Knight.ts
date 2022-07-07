import Piece from './Piece';

class Knight extends Piece {
  constructor(x: number, y: number) {
    const name = 'Knight';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
