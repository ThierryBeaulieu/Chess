
#include "Piece.h"

Piece::Piece(const int x, const int y) {
	position_ = {x, y};
}

Piece::~Piece()
{
}

Position Piece::getPosition() {
	return position_;
}

const std::vector<Position>& Piece::showPossibleMoves() {
	// TODO: Add the possible positions
	return possibleMoves_;
}