const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'root',
  port: 5432,
  password: 'root',
  database: 'Chess',
});

client.connect();

client.query('Select * from chess.users', (err: any, res: any) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
});

client.end();
