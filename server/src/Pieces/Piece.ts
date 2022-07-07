import Position from '../GameManager/Position';

abstract class Piece {
  name: String;
  position: Position;
  possibleMoves: Position[];
  constructor(x: number, y: number, name: String) {
    this.position = new Position(x, y);
    this.name = name;
    this.possibleMoves = [];
  }
  getName() {
    return this.name;
  }
  getPossibleMoves(): Position[] {
    this.updatePossibleMoves();
    return this.possibleMoves;
  }
  abstract updatePossibleMoves(): void;
}

export default Piece;
