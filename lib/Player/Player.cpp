#include "Player.h"

Player::Player() : name_("Unknown"), color_(Color::unknown) {

}

Player::~Player()
{
}

const Color& Player::getColor() const {
    return color_;
}

void Player::setColor(const Color& color) {
    color_ = color;
}

const std::string& Player::getName() const {
    return name_;
}

void Player::setName(const std::string& name) {
    name_ = name;
}

std::shared_ptr<Piece> Player::getPieceToMove() {
    // ask the user for the wanted piece
    return nullptr;
}

void Player::play() {

    // Ask the user what piece he wants
    bool playerEntryIsInvalid = true;

    while (playerEntryIsInvalid) {

        std::shared_ptr<Piece> pieceToMove = getPieceToMove();

        pieceToMove->showPossibleMoves();

        Position position = InputHandler::getUserInput();
    }

    // tell the user the available positions

    // if the position is correct, set the selected piece to a new position
    // if the user click on the same piece again, ask him what he wants again

    // end the users turn.

}