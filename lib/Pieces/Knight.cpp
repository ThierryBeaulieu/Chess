#include "Knight.h"

Knight::Knight(const int x, const int y)
{
	position_ = { x,y };
}

Knight::~Knight()
{
}

const std::vector<Position>& Knight::showPossibleMoves() {
	return possibleMoves_;
}