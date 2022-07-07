import Piece from './Piece';

export default class Queen extends Piece {
  constructor(x: number, y: number) {
    const name = 'Queen';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
