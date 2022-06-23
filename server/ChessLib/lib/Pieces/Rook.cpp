#include "Rook.h"

Rook::Rook(const int x, const int y)
{
	position_ = { x, y };
}

Rook::~Rook()
{
}

const std::vector<Position>& Rook::showPossibleMoves() {
	return possibleMoves_;
}