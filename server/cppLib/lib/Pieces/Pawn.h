#ifndef PAWN_H
#define PAWN_H

#include "Piece.h"

class Pawn : public Piece
{
public:
    Pawn(const int x, const int y);
    ~Pawn();

    virtual const std::vector<Position>& showPossibleMoves();
private:
    Pawn() = default;
};

#endif // PAWN_H