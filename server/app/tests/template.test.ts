import 'reflect-metadata';
import { Container } from 'typedi';
import GameService from '../services/game.service';
import PostgreSQLService from '../services/postgreSQL.service';

const resetQuery = `
DROP SCHEMA IF EXISTS chess CASCADE;
CREATE SCHEMA chess;

CREATE TABLE chess.user (
	sessionId VARCHAR(24),
	loginDate DATE,
	loginTime TIME,
	isAdmin BOOL,
	loginAttempts SMALLINT,
	PRIMARY KEY(sessionId)
);

CREATE TABLE chess.player (
    playerId VARCHAR(24),
    fname VARCHAR(150) NOT NULL,
    lname VARCHAR(150) NOT NULL,
    score SMALLINT NOT NULL,
    CONSTRAINT scoreInRange CHECK (score >= 0 AND score <= 2882),
	FOREIGN KEY (playerId) REFERENCES chess.user(sessionId),
    PRIMARY KEY(playerId)
);

CREATE TABLE chess.game (
	gameId VARCHAR(24),
	isOver BOOL,
	winnerId VARCHAR(24),
	playerAId VARCHAR(24) NOT NULL,
	playerBId VARCHAR(24) NOT NULL,
	FOREIGN KEY (playerAId) REFERENCES chess.player(playerId) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (playerBId) REFERENCES chess.player(playerId) ON UPDATE CASCADE ON DELETE RESTRICT,
	CONSTRAINT matchValidity CHECK (playerAId != playerBId),
	FOREIGN KEY (winnerId) REFERENCES chess.player(playerId) ON UPDATE CASCADE ON DELETE SET NULL,
	PRIMARY KEY(gameId)
);

CREATE TABLE chess.move (
	turn SMALLINT NOT NULL,
	userMove VARCHAR (10) NOT NULL,
	playerId VARCHAR(24) NOT NULL,
	gameId VARCHAR(24) NOT NULL,
	CONSTRAINT minimalTurn CHECK (turn > 0),
	FOREIGN KEY (playerId) REFERENCES chess.player(playerId) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (gameId) REFERENCES chess.game(gameId) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY (gameId, playerId, turn)
);

SET search_path = chess;

CREATE OR REPLACE FUNCTION insertNewMove()
RETURNS TRIGGER AS $$
    BEGIN
        IF NEW.turn is not null then return NEW;
        END IF;
		
        LOOP
            <<roolbac_to>>
            DECLARE
                max INTEGER:=null;
				
            BEGIN
            SELECT COUNT(turn) INTO MAX FROM chess.move WHERE gameId=NEW.gameId;
            
			IF max is null then
                max:=1;
            ELSE
                max=max+1;
            END IF;
			
            INSERT INTO chess.move(turn, gameId, playerId, userMove) VALUES (max, NEW.gameId, NEW.playerId, NEW.userMove);
            
			EXIT;
            exception WHEN unique_violation THEN
            --do nothing
            END;
			
        END LOOP;
    RETURN null;
END;

$$ LANGUAGE 'plpgsql';

CREATE TRIGGER trig1
 before insert 
    ON chess.move
   FOR EACH ROW
EXECUTE PROCEDURE insertNewMove();
`;

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
