import { Response, Request, Router } from 'express';
import GameService from '../services/game.service';
import Container from 'typedi';
import HTTP_STATE from '@app/classes/Tools/httpState';

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

        const playerId = playerData.id;
        const playerFname = playerData.fname;
        const playerLname = playerData.lname;

        gameService.addPlayer(playerId, playerFname, playerLname, null);
        console.log(playerData.id);
        console.log(
          `[PLAYER FNAME: ${playerData.fname}, FNAME: ${playerData.lname} AND ID: ${playerData.id} SENT]`,
        );
        res.status(HTTP_STATE.CREATED);
      } catch (e) {
        //res.status(500).send(null);
      }
    });

    /*
      try {
        const { id } = req.params;
        const recipe = await this.recipesService.getRecipeById(id);
        if (!recipe) res.status(HTTP_STATUS.NOT_FOUND).send();
        else res.json(recipe);
      } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).send();
      }
    */
    this.router.get('/:id', async function (req: Request, res: Response) {
      try {
        const playerId: String = req.params.id;
        const playerData = await gameService.getPlayer(playerId);
        if (!playerData) res.status(HTTP_STATE.BAD_REQUEST).send();
        else res.json(playerData);
      } catch (e) {
        res.status(HTTP_STATE.SERVER_ERROR).send(null);
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default PlayerController;
