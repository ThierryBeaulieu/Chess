
#ifndef KNIGHT_H
#define KNIGHT_H

#include "Piece.h"

class Knight : public Piece
{
public:
    Knight(const int x, const int y);
    ~Knight();
private:
    Knight() = default;
};

#endif // KNIGHT_H