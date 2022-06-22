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

}