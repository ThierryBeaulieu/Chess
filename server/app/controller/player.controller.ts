import { Response, Request, Router } from 'express';
import GameService from '../services/game.service';
import Container from 'typedi';

const userRouter = require('express').Router();

class PlayerController {
  public router: Router;
  private gameService: GameService;

  constructor() {
    this.gameService = Container.get(GameService);
    this.router = userRouter;
    this.setRoutersPaths();
  }

  setRoutersPaths() {
    const gameService = this.gameService;
    this.router.post('/names', function (req: Request, res: Response) {
      try {
        console.log(req.body);
        //console.log(`[USER SESSIONID SENT: ${sessionId}]`);
        res.status(200);
      } catch (e) {
        //res.status(500).send(null);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default PlayerController;
