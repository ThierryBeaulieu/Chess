
#include <iostream>
#include <string>
#include <memory>

#include "../lib/Pieces/Piece.h"
#include "../lib/Board/Board.h"
#include "../lib/GameManager/GameManager.h"

#include "../lib/InputHandler/InputHandler.h"

#if PR_DEBUG
#include "../lib/PR_Debug/PR_Debug.h"
#endif

int main()
{

    GameManager gameManager;

    std::cout << "Begin of the Game" << std::endl;

    std::cout << "First player: " << gameManager.getFirstPlayer()->getName() << std::endl;
    std::cout << "Second player: " << gameManager.getSecondPlayer()->getName() << std::endl;

#if PR_DEBUG
    PR_Debug::printGameInTerminal(gameManager);
#endif

    while (gameManager.getState() != State::checkmate)
    {

        std::shared_ptr<Player> player = gameManager.getPlayersTurn();

        player->play();

        gameManager.endPlayersTurn();
    }

    return 0;
}
