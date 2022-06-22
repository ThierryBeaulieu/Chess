#include "Queen.h"

Queen::Queen(const int x, const int y)
{
	position_ =  { x,y };
}

Queen::~Queen()
{
}

const std::vector<Position>& Queen::showPossibleMoves() {
	return possibleMoves_;
}