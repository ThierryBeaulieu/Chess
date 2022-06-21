#ifndef QUEEN_H
#define QUEEN_H

#include "Piece.h"

class Queen : public Piece
{
public:
    Queen(const int x, const int y);
    ~Queen();
private:
    Queen() = default;
};

#endif // QUEEN_H