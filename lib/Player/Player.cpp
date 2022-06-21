
#include "Player.h"

Player::Player(){
    
}

Player::~Player()
{
}

const std::string& Player::getName() const {
    return name_;
}

void Player::setName(const std::string& name) {
    name_ = name;
}
