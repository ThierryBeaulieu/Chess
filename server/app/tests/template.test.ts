import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';

describe('Game server', () => {
  it('The insertion and update should work in postgres', async () => {
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

    const firstPlayerId = 1;
    const secondPlayerId = 2;
    const badPlayerId = 3;

    const gameId = 1;

    const firstResult = await gameService.createGame(
      firstPlayerId,
      secondPlayerId,
    );
    expect(firstResult).toBe(true);

    const secondResult = await gameService.createGame(
      firstPlayerId,
      badPlayerId,
    );
    expect(secondResult).toBe(false);

    const moveState = await gameService.makeMove(
      gameId,
      firstPlayerId,
      'fsdflslj',
    );

    expect(moveState).toBe(true);

    const gameState = await gameService.setWinner(firstPlayerId, gameId);
    expect(gameState).toBe(true);
  });
});
