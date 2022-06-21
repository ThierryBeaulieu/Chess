
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