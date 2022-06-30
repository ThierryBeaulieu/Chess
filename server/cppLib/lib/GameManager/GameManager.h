#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include <memory>

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../GameManager/Position.h"
#include "../Random/Random.h"
#include "../GameManager/Color.h"

#include "../Pieces/Bishop.h"
#include "../Pieces/King.h"
#include "../Pieces/Knight.h"
#include "../Pieces/Pawn.h"
#include "../Pieces/Queen.h"
#include "../Pieces/Rook.h"
#include "../Pieces/Piece.h"

static const int boardSize_ = 8;

class GameManager
{
public:
    GameManager();
    ~GameManager();
        
    std::shared_ptr<Player> getPlayersTurn() const;
    void endPlayersTurn();

    std::shared_ptr<Player> getFirstPlayer() const;
    std::shared_ptr<Player> getSecondPlayer() const;

private:
    // id of players
    const int first = 0;
    const int second = 1;

    int white_ = -1;
    int black_ = -1;

    std::shared_ptr<Player> currentPlayer_;
    
    // Board
    Board<boardSize_> board_;
public:
    const Board<boardSize_> getBoard() const;
private:

    // players
    int indexOfCurrentPlayer_ = 0;
    static const int nbPlayers_ = 2;
    std::shared_ptr<Player> player_[nbPlayers_];

private:
    void setPlayersName();
    void setPlayersColor();
    void initializeBoard();
    void initializePlayers();
    void initializePlayersBoard(Color color);
};

#endif // GAMEMANAGER_H
