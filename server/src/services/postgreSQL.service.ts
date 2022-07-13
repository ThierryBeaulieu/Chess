import { Service } from 'typedi';
import { Client } from 'pg';

@Service()
export default class PostgreSQLService {
  private client: any;

  constructor() {
    this.client = new Client({
      host: 'localhost',
      user: 'postgres',
      port: 5432,
      password: 'postgres',
      database: 'Chess',
    });
  }

  async query(userQuery: string): Promise<Array<Object>> {
    await this.client.connect();
    const data = (await this.client.query(userQuery)).rows;
    await this.client.end();
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
