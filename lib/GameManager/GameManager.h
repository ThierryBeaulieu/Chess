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
    Board<8, Tile> board_;
};

#endif // GAMEMANAGER_H
