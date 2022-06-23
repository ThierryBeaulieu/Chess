
#ifndef KING_H
#define KING_H

#include "Piece.h"

class King : public Piece
{
public:
    King(const int x, const int y);
    ~King();

    virtual const std::vector<Position>& showPossibleMoves();

private:
    King() = default;
};

#endif // KING_H