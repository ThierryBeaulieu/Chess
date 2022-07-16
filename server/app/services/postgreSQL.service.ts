import { Service } from 'typedi';
import { Pool } from 'pg';

@Service()
export default class PostgreSQLService {
  private pool: any;

  constructor() {
    this.pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      port: 5432,
      password: 'postgres',
      database: 'Chess',
      max: 20,
      connectionTimeoutMillis: 2000,
      idleTimeoutMillis: 0,
    });
  }

  async query(userQuery: string): Promise<Array<Object>> {
    const data = (await this.pool.query(userQuery)).rows;
    return data;
  }
}

/*
Exemple of how multiple services can use a Service()

import PgService from './services/postgres.service';
import { Container, Service } from 'typedi';

@Service()
class ExempleService {
  constructor(public injectedService: PgService) {}
}

const service = Container.get(ExempleService);
service.injectedService.fetchUsers();

@Service()
class AnotherService {
  constructor(public injectedService: PgService) {}
}

const anotherService = Container.get(ExempleService);
anotherService.injectedService.fetchUsers();
*/
