import { Console } from 'console';
import { Service } from 'typedi';
import PostgreSQLService from './postgreSQL.service';

@Service()
export default class GameService {
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
}
