
#ifndef ROOK_H
#define ROOK_H

#include "Piece.h"

class Rook : public Piece
{
public:
    Rook(const int x, const int y);
    ~Rook();
private:
    Rook();
};

#endif // ROOK_H