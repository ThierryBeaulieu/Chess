#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../GameManager/Position.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
    
    void initialize();
    
private:
    static const int boardSize_ = 8;
    static const int nbPlayers_ = 2;
    Player players_[nbPlayers_];
    Board<boardSize_> board_;
};

#endif // GAMEMANAGER_H
