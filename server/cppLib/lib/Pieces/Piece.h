#ifndef PIECE_H
#define PIECE_H

#include <vector>

#include "../GameManager/Position.h"

class Piece
{
public:
    Piece() = default;
    virtual ~Piece();

    Position getPosition();
    void setPosition(Position newPosition);

    virtual const std::vector<Position>& showPossibleMoves() = 0;

protected:
    std::vector<Position> possibleMoves_;
    Position position_;
};

#endif // PIECE_H