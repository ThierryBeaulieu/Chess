-- to manually shutdown port 5343

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
 BEFORE INSERT 
    ON chess.move
   FOR EACH ROW
EXECUTE PROCEDURE insertNewMove();


DROP TABLE IF EXISTS chess.history CASCADE;

CREATE TABLE chess.history (
	id SERIAL PRIMARY KEY,
	dateAdded DATE NOT NULL,
	timeAdded TIME NOT NULL,
	sessionIdAdded VARCHAR(24) NOT NULL
);

CREATE OR REPLACE FUNCTION addSessionId()
RETURNS TRIGGER AS $addSessionId$
BEGIN
INSERT INTO chess.history(dateAdded, timeAdded, sessionIdAdded)
VALUES(current_date, current_time, NEW.sessionId);
RETURN NEW;
END;
$addSessionId$ LANGUAGE 'plpgsql';

CREATE TRIGGER trig2
BEFORE INSERT
	ON chess.user
   FOR EACH ROW
EXECUTE FUNCTION addSessionId();

