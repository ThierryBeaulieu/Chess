#ifndef BISHOP_H
#define BISHOP_H

#include "Piece.h"

class Bishop : public Piece
{
public:
    Bishop(const int x, const int y);
    ~Bishop();
private:
    Bishop() = default;
};

#endif // BISHOP_H