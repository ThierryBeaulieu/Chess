#ifndef PIECE_H
#define PIECE_H

#include <vector>
#include <string>

#include "../GameManager/Position.h"

class Piece
{
public:
    Piece() = default;
    virtual ~Piece();

    Position getPosition();
    void setPosition(Position newPosition);

    virtual const std::string getName() const = 0;

    virtual const std::vector<Position>& getPossibleMoves() = 0;

protected:
    std::vector<Position> possibleMoves_;
    Position position_;
};

#endif // PIECE_H