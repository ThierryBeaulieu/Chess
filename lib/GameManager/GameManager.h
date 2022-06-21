#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../GameManager/Position.h"
#include "../GameManager/State.h"
#include "../Random/Random.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
        
    bool getPlayersTurn();
    void endPlayersTurn();

    const Player& getFirstPlayer();
    const Player& getSecondPlayer();
    
private:
    const int first = 0;
    const int second = 1;
    
    static const int boardSize_ = 8;
    static const int nbPlayers_ = 2;
    bool playersTurn_;

    Player player_[nbPlayers_];
    Board<boardSize_> board_;
    State state_;

private:
    void setPlayersName();
};

#endif // GAMEMANAGER_H
