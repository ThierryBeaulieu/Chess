import 'reflect-metadata';
import 'dotenv/config';
import { Request, Response } from 'express';
import CookieController from './controller/cookie.controller';
import GameController from './controller/game.controller';
//import WebSocket from 'ws';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const cookieController = new CookieController();
app.use('/api-cookie/', cookieController.getRouter());

const gameController = new GameController();
app.use('/game', gameController.getRouter());

app.listen(process.env.PORT, () => {
  console.log(`[Listening on port ${process.env.PORT}]`);
});
