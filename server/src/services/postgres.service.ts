import 'reflect-metadata';
import { Service, Container } from 'typedi';
import { Client } from 'pg';

@Service()
export default class PgService {
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

  fetchUsers() {
    this.client.connect();

    this.client.query('Select * from chess.users', (err: any, res: any) => {
      if (!err) {
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
      this.client.end();
    });
  }
}

const serviceInstance = Container.get(PgService);
// we request an instance of ExampleService from TypeDI

serviceInstance.fetchUsers();
