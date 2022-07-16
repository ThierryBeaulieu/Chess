-- Exemple of queries to use in node.js
-- DO NOT USE THIS FILE IN PRODUCTION

-- 1.user Asking for a user data
SELECT * FROM chess.user WHERE sessionId='23asd';

-- 2.player Asking for a player's data
SELECT * FROM chess.player WHERE playerId='42asd';

-- 3.game Asking for a game's data
SELECT * FROM chess.game WHERE gameId='game1';

-- 4.move Asking for the moves made during a game
SELECT * FROM chess.move WHERE gameId='game1';

-- 5.verify history of insertion
SELECT * FROM chess.history;