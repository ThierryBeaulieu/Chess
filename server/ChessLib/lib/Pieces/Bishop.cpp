#include "Bishop.h"

Bishop::Bishop(const int x, const int y)
{
	position_ = { x,y };
}

Bishop::~Bishop()
{
}

const std::vector<Position>& Bishop::showPossibleMoves() {
	return possibleMoves_;
}