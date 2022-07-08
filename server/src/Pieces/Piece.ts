export default abstract class Piece {
  private name: String;
  constructor(name: String) {
    this.name = name;
  }
  getName(): String {
    return this.name;
  }
  setName(name: String): void {
    this.name = name;
  }
}
