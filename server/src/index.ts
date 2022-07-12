import { Request, Response } from 'express';
import cookieRouter from './services/cookie.service';
import 'dotenv/config';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/api-cookie/', cookieRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
