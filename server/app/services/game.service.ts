import { Console } from 'console';
import { Service } from 'typedi';
import PostgreSQLService from './postgreSQL.service';

@Service()
export default class GameService {
  public DEFAULT_SCORE: number = 1200;

  constructor(private PgService: PostgreSQLService) {}

  async createGame(playerAId: number, playerBId: number): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.game (playerAId, playerBId)
      VALUES (${playerAId}, ${playerBId});`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async addPlayer(
    firstName: string,
    lastName: string,
    score: number,
  ): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.player (fname, lname, score)
      VALUES ('${firstName}', '${lastName}', ${score});`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async makeMove(
    gameId: number,
    playerId: number,
    userMove: string,
  ): Promise<Boolean> {
    try {
      const request = `INSERT INTO chess.move(gameId, playerId, userMove)
      VALUES (${gameId}, ${playerId}, '${userMove}');`;
      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }

  async setWinner(winnerId: number, gameId: number): Promise<Boolean> {
    try {
      const request = `
      UPDATE chess.game
      SET isOver = true,
        winnerId = ${winnerId}
      WHERE id = ${gameId};`;

      await this.PgService.query(request);
      return true;
    } catch (e) {
      return false;
    }
  }
}
