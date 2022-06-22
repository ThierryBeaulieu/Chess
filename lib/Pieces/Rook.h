#ifndef ROOK_H
#define ROOK_H

#include "Piece.h"

class Rook : public Piece
{
public:
    Rook(const int x, const int y);
    ~Rook();

    virtual const std::vector<Position>& showPossibleMoves();

private:
    Rook();
};

#endif // ROOK_H