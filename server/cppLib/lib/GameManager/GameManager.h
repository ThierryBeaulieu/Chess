#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include <memory>

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../GameManager/Position.h"
#include "../GameManager/State.h"
#include "../Random/Random.h"
#include "../GameManager/Color.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
        
    std::shared_ptr<Player> getPlayersTurn() const;
    void endPlayersTurn();

    std::shared_ptr<Player> getFirstPlayer() const;
    std::shared_ptr<Player> getSecondPlayer() const;

    State getState();

private:
    const int first = 0;
    const int second = 1;
    
    static const int boardSize_ = 8;
    static const int nbPlayers_ = 2;

    int indexOfCurrentPlayer_ = 0;

    std::shared_ptr<Player> currentPlayer_;
    std::shared_ptr<Player> player_[nbPlayers_];
    Board<boardSize_> board_;
    State state_;

private:
    void setPlayersName();
    void setPlayersColor();
    void initializeBoard();
    void initializePlayers();
};

#endif // GAMEMANAGER_H
