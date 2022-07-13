import { Service } from 'typedi';
import PostgreSQLService from './postgreSQL.service';

@Service()
export default class GameService {
  constructor(private PgService: PostgreSQLService) {}

  async createGame(): Promise<void> {
    const response = await this.PgService.fetch('SELECT * FROM chess.player');
    console.log(response[0]);
  }
}
