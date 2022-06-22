#ifndef BISHOP_H
#define BISHOP_H

#include "Piece.h"

class Bishop : public Piece
{
public:
    Bishop(const int x, const int y);
    ~Bishop();

    virtual const std::vector<Position>& showPossibleMoves();

private:
    Bishop() = default;
};

#endif // BISHOP_H