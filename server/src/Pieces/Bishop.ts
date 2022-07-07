import Piece from './Piece';

class Bishop extends Piece {
  constructor(x: number, y: number) {
    const name = 'Bishop';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
