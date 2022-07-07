import Piece from './Piece';

export default class Pawn extends Piece {
  constructor(x: number, y: number) {
    const name = 'Pawn';
    super(x, y, name);
  }
  updatePossibleMoves() {}
}
