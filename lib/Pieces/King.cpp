#include "King.h"

King::King(const int x, const int y)
{
	position_ = { x,y };
}

King::~King()
{
}

const std::vector<Position>& King::showPossibleMoves() {
	return possibleMoves_;
}
