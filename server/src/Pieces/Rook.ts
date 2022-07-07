import Piece from './Piece';

export default class Rook extends Piece {
  constructor(x: number, y: number) {
    const name = 'Rook';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
