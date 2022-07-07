import Piece from './Piece';

export default class Bishop extends Piece {
  constructor(x: number, y: number) {
    const name = 'Bishop';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
