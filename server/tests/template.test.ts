import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../src/services/game.service';

describe('Update method', () => {
  it('should update a specific existing Ingredient entry', () => {
    function sum(a: number, b: number) {
      return a + b;
    }
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Piece test', () => {
  it('should update a specific existing Ingredient entry', () => {});
});

describe('Game server', () => {
  it('User shouldnt be able to fetch with bad player', async () => {
    const gameService = Container.get(GameService);
    const fresult = await gameService.createGame(1, 2);
    expect(fresult).toBe(true);

    const sresult = await gameService.createGame(1, 2);
    expect(sresult).toBe(false);
  });
});
