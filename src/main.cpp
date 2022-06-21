
#include <iostream>

#include <../lib/Pieces/Piece.h>
#include <../lib/Board/Board.h>
#include <../lib/GameManager/GameManager.h>


int main()
{
    
    GameManager gameManager;
    
    std::cout << "Begin of the Game" << std::endl;

    std::cout << "First player: " << gameManager.getFirstPlayer().getName() << std::endl;
    std::cout << "Second player: " << gameManager.getSecondPlayer().getName() << std::endl;


    return 0;
}
