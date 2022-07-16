import 'reflect-metadata';
import 'dotenv/config';
import { Request, Response } from 'express';
import CookieController from './controller/cookie.controller';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const cookieController = new CookieController();
app.use('/api-cookie/', cookieController.getRouter());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`[Listening on port ${process.env.PORT}]`);
});
