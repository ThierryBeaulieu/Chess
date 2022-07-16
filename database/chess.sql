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

