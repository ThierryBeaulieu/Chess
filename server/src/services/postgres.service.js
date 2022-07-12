var { Client } = require('pg');

var client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'postgres',
  database: 'Chess',
});
client.connect();
client.query('select * from chess.Users', function (err, res) {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});
