import { Response, Request, Router } from 'express';
import Cookie from '../classes/Tools/Cookie';
import GameService from '../services/game.service';
import Container from 'typedi';
import HTTP_STATE from '../classes/Tools/httpState';

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
    this.router.get('/sessionId', async function (req: Request, res: Response) {
      try {
        const sessionId = Cookie.generateSessionId(DEFAULT_SESSION_ID_SIZE);
        const request = await gameService.addUser(sessionId);
        console.log(`[USER SESSIONID SENT: ${sessionId}]`);
        if (request === true) {
          res.status(HTTP_STATE.CREATED).json(sessionId);
        } else {
          res.sendStatus(HTTP_STATE.BAD_REQUEST);
        }
      } catch (e) {
        res.sendStatus(HTTP_STATE.SERVER_ERROR);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default CookieController;
