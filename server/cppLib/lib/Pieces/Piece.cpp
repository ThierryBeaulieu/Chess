
#include "Piece.h"

Piece::~Piece()
{
}

Position Piece::getPosition() {
	return position_;
}

void Piece::setPosition(Position newPosition) {
	position_ = newPosition;
}