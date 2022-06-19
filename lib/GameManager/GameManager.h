#ifndef GAMEMANAGER_H
#define GAMEMANAGER_H

#include "../Player/Player.h"
#include "../Board/Board.h"
#include "../Position/Position.h"

class GameManager
{
public:
    GameManager();
    ~GameManager();
    
    void initialize();
    
private:
    Player players_;
    Board board_;
};

#endif // GAMEMANAGER_H
