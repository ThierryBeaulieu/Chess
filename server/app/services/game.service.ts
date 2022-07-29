import { Service } from 'typedi';
import PostgreSQLService from './postgreSQL.service';

@Service()
class GameService {
  public DEFAULT_SCORE: number = 1200;

  constructor(private PgService: PostgreSQLService) {}

  // Users
  async addUser(sessionId: String): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.user (sessionId)
      VALUES ({${sessionId}');`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async getUser(sessionId: String): Promise<Array<Object>> {
    try {
      const request = `INSERT INTO chess.user (sessionId)
      VALUES ('${sessionId}');`;
      const userData = await this.PgService.query(request);
      return userData;
    } catch (e) {
      return null;
    }
  }

  // Games
  async createGame(
    gameId: String,
    playerAId: String,
    playerBId: String,
  ): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.game (gameId, playerAId, playerBId)
      VALUES ('${gameId}', '${playerAId}', '${playerBId}');`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async getGame(gameId: String): Promise<Array<Object>> {
    try {
      const request = `SELECT * FROM chess.game WHERE gameId='${gameId}';`;
      const gameData = await this.PgService.query(request);
      return gameData;
    } catch (e) {
      return null;
    }
  }

  async setWinner(winnerId: String, gameId: String): Promise<Boolean> {
    try {
      const request = `
      UPDATE chess.game
      SET isOver = true,
        winnerId = '${winnerId}'
      WHERE gameId = '${gameId}';`;

      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Players
  async addPlayer(
    playerId: String,
    firstName: String,
    lastName: String,
    score: number,
  ): Promise<Boolean> {
    try {
      if (score == null) {
        score = this.DEFAULT_SCORE;
      }
      const request = `INSERT INTO chess.player (playerId, fname, lname, score)
      VALUES ('${playerId}', '{${firstName}}', '{${lastName}}', ${score});`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async getPlayer(playerId: String): Promise<Array<Object>> {
    try {
      const request = `SELECT * FROM chess.player WHERE playerId=${playerId};`;
      const playersInfo = await this.PgService.query(request);
      return playersInfo;
    } catch (e) {
      return null;
    }
  }

  // Moves
  async makeMove(
    gameId: String,
    playerId: String,
    userMove: String,
  ): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.move(gameId, playerId, userMove)
      VALUES ('${gameId}', '${playerId}', '${userMove}');`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async getMove(gameId: String): Promise<Array<Object>> {
    try {
      const request = `SELECT * FROM chess.move WHERE gameId='${gameId}';`;
      const usermove: Array<Object> = await this.PgService.query(request);
      return usermove;
    } catch (e) {
      return null;
    }
  }
}

export default GameService;
