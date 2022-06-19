#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Tile/Tile.h"
#include "../Position/Position.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
    
    void initialize();
    
private:
    
    Player players_;
    static const int boardSize_ = 8;
    Board<boardSize_> board_;
};

#endif // GAMEMANAGER_H
