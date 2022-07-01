#include "Knight.h"

Knight::Knight(const int x, const int y)
{
	position_ = { x,y };
}

Knight::~Knight()
{
}

const std::vector<Position>& Knight::getPossibleMoves() {
	return possibleMoves_;
}

const std::string Knight::getName() const {
	return "Knight";
}