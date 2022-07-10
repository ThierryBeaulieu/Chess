import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const cors = require('cors');

/*
app.use(cors());

const cookie = require('./services/cookie.service');
app.use('/cookie', cookie);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
*/
app.post('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
