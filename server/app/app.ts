import 'reflect-metadata';
import { Container } from 'typedi';
import { Request, Response } from 'express';
import cookieRouter from './controller/cookie.controller';
import 'dotenv/config';
import GameService from './services/game.service';



const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-cookie/', cookieRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`[Listening on port ${process.env.PORT}]`);
});
