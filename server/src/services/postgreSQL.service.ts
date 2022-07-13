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
    this.client.connect();
    // this.client.end();
  }

  fetch(userQuery: string): any {
    this.client.query(userQuery, (err: any, res: any) => {
      if (!err) {
        console.log(res.rows);
        console.log(typeof res.rows);
        return res.rows;
      } else {
        console.log(err.message);
        return err.message;
      }
    });
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
