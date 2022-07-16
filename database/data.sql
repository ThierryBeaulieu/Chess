-- Exemples of way to make the insertion of data using node.js
-- DO NOT USE THIS FILE IN PRODUCTION

INSERT INTO chess.user (sessionId)
VALUES ('42asd');

INSERT INTO chess.user (sessionId)
VALUES ('23asd');

INSERT INTO chess.player (playerId, fname, lname, score)
VALUES ('42asd','Simon', 'Langlois', 0);

INSERT INTO chess.player (playerId, fname, lname, score)
VALUES ('23asd','Renée', 'Debois', 2882);

-- first game
INSERT INTO chess.game (gameId, playerAId, playerBId)
VALUES ('game1', '42asd', '23asd');

-- second game
INSERT INTO chess.game (gameId, playerAId, playerBId)
VALUES ('game2', '42asd', '23asd');

-- players are playing the first game
INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game1', '42asd', 'acg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game1', '42asd', 'acsdfg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game1', '42asd', 'kjsd');

UPDATE chess.game
SET isOver = true,
	winnerId = '42asd'
WHERE playerAId = '42asd' AND playerBId = '23asd' AND gameId = 'game1';

--players are playing the second game
INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game2', '42asd', 'acg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game2', '42asd', 'acsdfg');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game2', '42asd', 'kjsd');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game2', '42asd', 'abdc');

INSERT INTO chess.move(gameId, playerId, userMove)
VALUES ('game2', '42asd', 'wls');

UPDATE chess.game
SET isOver = true,
	winnerId = '23asd'
WHERE playerAId = '42asd' AND playerBId = '23asd' AND gameId = 'game2';

