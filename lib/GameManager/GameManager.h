#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../GameManager/Position.h"
#include "../GameManager/State.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
    
    void initialize();
    
    int getPlayersTurn();
    void endPlayersTurn();
    
private:
    const int firstPlayer = 0;
    const int secondPlayer = 1;
    
    static const int boardSize_ = 8;
    static const int nbPlayers_ = 2;
    
    Player player_[nbPlayers_];
    Board<boardSize_> board_;
    State state_;
};

#endif // GAMEMANAGER_H
