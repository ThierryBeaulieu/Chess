#ifndef KNIGHT_H
#define KNIGHT_H

#include "Piece.h"

class Knight : public Piece
{
public:
    Knight(const int x, const int y);
    ~Knight();

    virtual const std::vector<Position>& getPossibleMoves();
    virtual const std::string getName() const;
private:
    Knight() = default;
};

#endif // KNIGHT_H