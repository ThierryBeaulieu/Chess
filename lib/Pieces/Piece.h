#ifndef PIECE_H
#define PIECE_H

#include "../GameManager/Position.h"

class Piece
{
public:
    Piece() = default;
    Piece(int x, int y);
    ~Piece();
protected:
    Position position_;
};

#endif // PIECE_H