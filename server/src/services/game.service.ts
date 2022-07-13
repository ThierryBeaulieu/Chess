import { Service } from 'typedi';
import PostgreSQLService from './postgreSQL.service';

@Service()
export default class GameService {
  constructor(private PgService: PostgreSQLService) {}

  createGame(): void {
    this.PgService.fetch('SELECT * FROM')
  }
}
