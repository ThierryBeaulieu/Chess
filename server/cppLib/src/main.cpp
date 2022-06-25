
#include <iostream>
#include <string>
#include <memory>

#include <../lib/Pieces/Piece.h>
#include <../lib/Board/Board.h>
#include <../lib/GameManager/GameManager.h>


int main()
{
    GameManager gameManager;
    
    std::cout << "Begin of the Game" << std::endl;

    std::cout << "First player: " << gameManager.getFirstPlayer()->getName() << std::endl;
    std::cout << "Second player: " << gameManager.getSecondPlayer()->getName() << std::endl;
    
    while (gameManager.getState() != State::checkmate) {

        std::shared_ptr<Player> player = gameManager.getPlayersTurn();

        player->play();

        gameManager.endPlayersTurn();
    }

    return 0;
}