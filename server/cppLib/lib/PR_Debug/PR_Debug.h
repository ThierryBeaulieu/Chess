#if PR_DEBUG

#include <iostream>
#include <memory>
#include <string>

#include "../GameManager/GameManager.h"
#include "../Board/Board.h"
#include "../Pieces/Piece.h"

namespace PR_Debug
{
    void printGameInTerminal(const GameManager &gameManager);
}

#endif