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




