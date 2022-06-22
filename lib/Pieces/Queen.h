#ifndef QUEEN_H
#define QUEEN_H

#include "Piece.h"

class Queen : public Piece
{
public:
    Queen(const int x, const int y);
    ~Queen();

    virtual const std::vector<Position>& showPossibleMoves();

private:
    Queen() = default;
};

#endif // QUEEN_H