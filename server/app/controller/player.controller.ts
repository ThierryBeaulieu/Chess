import { Response, Request, Router } from 'express';
import GameService from '../services/game.service';
import Container from 'typedi';
import HTTP_STATE from '../classes/Tools/httpState';

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

    this.router.post('/names', async function (req: Request, res: Response) {
      try {
        const playerData = req.body;
        const request = await gameService.addPlayer(
          playerData.id,
          playerData.fname,
          playerData.lname,
          null,
        );
        console.log(
          `[PLAYER FNAME: ${playerData.fname}, FNAME: ${playerData.lname} AND ID: ${playerData.id} SENT]`,
        );
        if (request === true) {
          res.sendStatus(HTTP_STATE.CREATED);
        } else {
          res.sendStatus(HTTP_STATE.BAD_REQUEST);
        }
      } catch (e) {
        res.sendStatus(HTTP_STATE.SERVER_ERROR);
      }
    });

    this.router.get('/:id', async function (req: Request, res: Response) {
      try {
        const playerId: String = req.params.id;
        const playerData = await gameService.getPlayer(playerId);
        if (!playerData) {
          res.sendStatus(HTTP_STATE.BAD_REQUEST);
        } else {
          res.json(playerData);
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

export default PlayerController;
