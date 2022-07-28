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
        const playerData = req.body;

        if (playerData.lenght > 0) {
          const playerId = playerData.id;
          const playerFname = playerData.fname;
          const playerLname = playerData.lname;

          gameService.addPlayer(playerId, playerFname, playerLname, null);
          console.log(
            `[PLAYER FNAME: ${playerData.fname} AND FNAME: ${playerData.lnames} SENT]`,
          );
          res.status(201);
        } else {
          res.status(404);
        }
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
