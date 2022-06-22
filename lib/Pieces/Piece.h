#ifndef PIECE_H
#define PIECE_H

#include <vector>

#include "../GameManager/Position.h"

class Piece
{
public:
    Piece() = default;
    Piece(int x, int y);
    virtual ~Piece();

    Position getPosition();

    const std::vector<Position>& showPossibleMoves();

protected:
    std::vector<Position> possibleMoves_;
    Position position_;
};

#endif // PIECE_H