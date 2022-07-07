import Board from '../Board/Board';
import Player from '../Player/Player';

const DEFAULT_BOARD_SIZE = 8;

class GameManager {
  private currentPlayers: Player = [];
  private board: Board;

  constructor() {
    this.board = new Board(DEFAULT_BOARD_SIZE, DEFAULT_BOARD_SIZE);
  }
}

export default GameManager;
