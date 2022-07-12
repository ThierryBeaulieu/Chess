-- validating database by including generic values
-- DO NOT USE IN PRODUCTION

INSERT INTO chess.player (fname, lname, score)
VALUES ('Simon', 'Langlois', 0);

INSERT INTO chess.player (fname, lname, score)
VALUES ('Renée', 'Debois', 2882);

-- first game
INSERT INTO chess.game (playerAId, playerBId)
VALUES (1, 2);

-- second game
INSERT INTO chess.game (playerAId, playerBId)
VALUES (1, 2);

-- players are playing the first game
INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (1, 1, 'acg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (1, 2, 'acsdfg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (1, 1, 'kjsd');

UPDATE chess.game
SET isOver = true,
	winnerId = 1
WHERE playerAId = 1 AND playerBId = 2 AND id = 1;

--players are playing the second game
INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (2, 1, 'acg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (2, 2, 'acsdfg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (2, 1, 'kjsd');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (2, 1, 'abdc');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES (2, 2, 'wls');

UPDATE chess.game
SET isOver = true,
	winnerId = 2
WHERE playerAId = 1 AND playerBId = 2 AND id = 2;

