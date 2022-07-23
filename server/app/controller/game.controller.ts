import { Response, Request, Router } from 'express';

const gameRouter = require('express').Router();

class GameController {
  public router: Router;

  constructor() {
    this.router = gameRouter;
    this.setRoutersPaths();
  }

  setRoutersPaths() {
    this.router.get('/', function (req: Request, res: Response) {
      try {
        res.status(200);
      } catch (e) {
        res.status(500).send(null);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default GameController;
