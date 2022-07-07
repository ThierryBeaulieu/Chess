import Position from '../GameManager/Position';

abstract class Piece {
  protected name: String;
  protected position: Position;
  protected possibleMoves: Position[];
  constructor(x: number, y: number, name: String) {
    this.position = new Position(x, y);
    this.name = name;
    this.possibleMoves = [];
  }
  getName(): String {
    return this.name;
  }
  getPosition(): Position {
    return this.position;
  }
  setPosition(position: Position): void {
    this.position = position;
  }
  getPossibleMoves(): Position[] {
    this.updatePossibleMoves();
    return this.possibleMoves;
  }
  abstract updatePossibleMoves(): void;
}

export default Piece;
