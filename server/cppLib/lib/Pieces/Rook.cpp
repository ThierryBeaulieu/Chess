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

const std::string Rook::getName() const {
	return "Rook  ";
}