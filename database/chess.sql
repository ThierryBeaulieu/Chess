DROP SCHEMA IF EXISTS chess CASCADE;
CREATE SCHEMA chess;

CREATE TABLE chess.player (
    id SERIAL,
    fname VARCHAR(150) NOT NULL,
    lname VARCHAR(150) NOT NULL,
    score SMALLINT NOT NULL,
    CONSTRAINT scoreInRange CHECK (score >= 0 AND score <= 2882),
    PRIMARY KEY(id)
);

CREATE TABLE chess.game (
	id SERIAL,
	isOver BOOL,
	winnerId INT,
	playerAId INT NOT NULL,
	playerBId INT NOT NULL,
	FOREIGN KEY (playerAId) REFERENCES chess.player(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (playerBId) REFERENCES chess.player(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	CONSTRAINT matchValidity CHECK (playerAId != playerBId),
	FOREIGN KEY (winnerId) REFERENCES chess.player(id) ON UPDATE CASCADE ON DELETE SET NULL,
	PRIMARY KEY(id)
);

CREATE TABLE chess.move (
	turn SMALLINT NOT NULL,
	userMove VARCHAR (10) NOT NULL,
	playerId INT NOT NULL,
	gameId INT NOT NULL,
	CONSTRAINT minimalTurn CHECK (turn > 0),
	FOREIGN KEY (playerId) REFERENCES chess.player(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	FOREIGN KEY (gameId) REFERENCES chess.game(id) ON UPDATE CASCADE ON DELETE RESTRICT,
	PRIMARY KEY (gameId, playerId, turn)
);


