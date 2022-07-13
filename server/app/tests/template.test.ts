import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';

describe('Game server', () => {
  it('The insertion and update should work in postgres', async () => {
    const firstPlayerId = 1;
    const secondPlayerId = 2;
    const badPlayerId = 3;
    const gameId = 1;
    const badGameId = -1;

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
      'abcdef',
    );
    expect(moveState).toBe(true);

    const moveState2 = await gameService.makeMove(
      badGameId,
      firstPlayerId,
      'ijklm',
    );
    expect(moveState2).toBe(false);

    const playersMove = await gameService.getPlayersMove(gameId);
    const stubData = [{ usermove: 'abcdef', playerid: 1 }];
    expect(playersMove).toStrictEqual(stubData);
    const gameState = await gameService.setWinner(firstPlayerId, gameId);
    expect(gameState).toBe(true);
  });
});
