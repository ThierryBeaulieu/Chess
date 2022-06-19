#include <iostream>

#include <../lib/Pieces/Piece.h>
#include <../lib/Board/Board.h>

int main()
{
    std::cout << "Testing Piece::printPosition()" << std::endl;
    Piece p;
    p.printPosition();

    std::cout << "Testing Board::state()" << std::endl;
    Board b;
    b.printState();

    return 0;
}
