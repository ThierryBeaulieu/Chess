#include "Pawn.h"

Pawn::Pawn(const int x, const int y)
{
	position_ = { x,y };
}

Pawn::~Pawn()
{
}

const std::vector<Position>& Pawn::showPossibleMoves() {
	return possibleMoves_;
}