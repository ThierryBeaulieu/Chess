import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';
import PostgreSQLService from '../services/postgreSQL.service';
import resetQuery from './resetQuery';

describe('Game server', () => {
  beforeEach(async () => {
    const postgre = Container.get(PostgreSQLService);
    await postgre.query(resetQuery);
  });

  it('The insertion and update should work in postgres', async () => {
    const player1Sessionid = '23';
    const player2Sessionid = '32';
    const badPlayerId = '3';
    const gameId = '1';
    const gameId2 = '2';
    const badGameId = '-1';

    // Services
    const gameService = Container.get(GameService);

    // Users
    const user = await gameService.addUser(player1Sessionid);
    const user2 = await gameService.addUser(player2Sessionid);

    // Players
    const player1Added = await gameService.addPlayer(
      player1Sessionid,
      'Erika',
      'Laseault',
      gameService.DEFAULT_SCORE,
    );
    expect(player1Added).toBe(true);

    const player2Added = await gameService.addPlayer(
      player2Sessionid,
      'Monique',
      'Leclerc',
      gameService.DEFAULT_SCORE,
    );
    expect(player2Added).toBe(true);

    // Games
    const firstResult = await gameService.createGame(
      gameId,
      player1Sessionid,
      player2Sessionid,
    );
    expect(firstResult).toBe(true);

    const secondResult = await gameService.createGame(
      gameId2,
      player1Sessionid,
      badPlayerId,
    );
    expect(secondResult).toBe(false);

    // Moves
    const firstPlayersMoveData = 'abcdef';
    const moveState = await gameService.makeMove(
      gameId,
      player1Sessionid,
      firstPlayersMoveData,
    );
    expect(moveState).toBe(true);

    const secondPlayersMoveData = 'ijkl';
    const moveState2 = await gameService.makeMove(
      badGameId,
      player1Sessionid,
      secondPlayersMoveData,
    );
    expect(moveState2).toBe(false);

    const playersMove = await gameService.getMove(gameId);
    const stubDataForMove = [
      {
        gameid: gameId,
        playerid: player1Sessionid,
        turn: 1,
        usermove: firstPlayersMoveData,
      },
    ];
    expect(playersMove).toStrictEqual(stubDataForMove);

    const secondPlayersMove = await gameService.getMove(badGameId);
    expect(secondPlayersMove).toStrictEqual([]);

    // Updates
    const gameState = await gameService.setWinner(player1Sessionid, gameId);
    expect(gameState).toBe(true);

    const gameData = await gameService.getGame(gameId);
    expect(gameData).not.toBe(null);
  });
});
