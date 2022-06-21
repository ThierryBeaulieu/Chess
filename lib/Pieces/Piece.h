#ifndef PIECE_H
#define PIECE_H

#include "../GameManager/Position.h"

class Piece
{
public:
    Piece() = default;
    Piece(int x, int y);
    virtual ~Piece();

    Position getPosition();
protected:
    Position position_;
};

#endif // PIECE_H