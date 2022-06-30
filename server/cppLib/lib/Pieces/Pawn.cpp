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

const std::string Pawn::getName() const {
	return "Pawn  ";
}