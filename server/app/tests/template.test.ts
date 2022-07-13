import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';

describe('Game server', () => {
  it('User shouldnt be able to fetch with bad player', async () => {
    const gameService = Container.get(GameService);

    const player1Added = await gameService.addPlayer(
      'Erika',
      'Laseault',
      gameService.DEFAULT_SCORE,
    );
    expect(player1Added).toBe(true);

    const player2Added = await gameService.addPlayer(
      'Monique',
      'Leclerc',
      gameService.DEFAULT_SCORE,
    );
    expect(player2Added).toBe(true);

    const firstResult = await gameService.createGame(1, 2);
    expect(firstResult).toBe(true);

    const secondResult = await gameService.createGame(1, 3);
    expect(secondResult).toBe(false);
  });
});
