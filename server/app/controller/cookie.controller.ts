import { Response, Request, Router } from 'express';
import Cookie from '../classes/Tools/Cookie';
import GameService from '../services/game.service';
import Container from 'typedi';
import HTTP_STATE from '@app/classes/Tools/httpState';

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
        res.status(HTTP_STATE.CREATED).json(sessionId);
      } catch (e) {
        res.status(HTTP_STATE.SERVER_ERROR).send(null);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default CookieController;
