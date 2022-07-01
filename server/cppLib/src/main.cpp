
#include <iostream>
#include <string>
#include <memory>
#include <stdlib.h>

#include "../lib/Pieces/Piece.h"
#include "../lib/Board/Board.h"
#include "../lib/GameManager/GameManager.h"

#include "../lib/InputHandler/InputHandler.h"

#if PR_DEBUG
#include "../lib/PR_Debug/PR_Debug.h"
#endif

int main()
{
    std::shared_ptr<GameManager> gameManager = std::make_shared<GameManager>();

    while (gameManager->getFirstPlayer()->getState() != State::checkmate && gameManager->getSecondPlayer()->getState() != State::checkmate) {

        std::cout << "The game has started" << std::endl;

        std::cout << "First player: " << gameManager->getFirstPlayer()->getName() << std::endl;
        std::cout << "Second player: " << gameManager->getSecondPlayer()->getName() << std::endl;

#if PR_DEBUG
        PR_Debug::printGameInTerminal(gameManager);
#endif

        std::shared_ptr<Player> player = gameManager->getPlayersTurn();

        player->play();

        gameManager->endPlayersTurn();
        system("CLS");
    }
    return 0;
}
