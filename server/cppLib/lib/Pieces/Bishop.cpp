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
const std::string Bishop::getName() const {
	return "Bishop";
}