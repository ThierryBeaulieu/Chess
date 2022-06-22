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

void Player::play() {

    // Ask the user what piece he wants

    // tell the user the available positions

    // if the position is correct, set the selected piece to a new position
    // if the user click on the same piece again, ask him what he wants again

    // end the users turn.

}