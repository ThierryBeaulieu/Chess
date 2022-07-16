-- Exemple of queries to use in node.js
-- DO NOT USE THIS FILE IN PRODUCTION

-- 1.user Asking for a user data when sessionId = '23asd'
SELECT * FROM chess.user WHERE sessionId='23asd';

SELECT * FROM chess.player;

SELECT * FROM chess.game;

SELECT * FROM chess.move;
