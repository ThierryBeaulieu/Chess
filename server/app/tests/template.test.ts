import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';

describe('Game server', () => {
  it('User shouldnt be able to fetch with bad player', async () => {
    const gameService = Container.get(GameService);
    const firstResult = await gameService.createGame(1, 2);
    expect(firstResult).toBe(true);

    const secondResult = await gameService.createGame(1, 3);
    expect(secondResult).toBe(false);
  });
});
