import { Response, Request, Router } from 'express';
import Cookie from '../classes/Tools/Cookie';
import GameService from '../services/game.service';
import Container from 'typedi';

const cookieRouter = require('express').Router();

const DEFAULT_SESSION_ID_SIZE = 24;

class CookieController {
  public router: Router;
  private gameService: GameService;

  constructor() {
    this.gameService = Container.get(GameService);
    this.router = cookieRouter;
    this.setRoutersPaths();
  }

  setRoutersPaths() {
    const gameService = this.gameService;
    this.router.get('/sessionId', function (req: Request, res: Response) {
      try {
        const sessionId = Cookie.generateSessionId(DEFAULT_SESSION_ID_SIZE);
        gameService.addUser(sessionId);
        console.log(`[USER SESSIONID SENT: ${sessionId}]`);
        res.status(200).json(sessionId);
      } catch (e) {
        res.status(500).send(null);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default CookieController;
