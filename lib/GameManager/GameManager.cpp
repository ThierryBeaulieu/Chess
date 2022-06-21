
#include "GameManager.h"

GameManager::GameManager()
{
    state_ = State::none;
    playersTurn_ = Random::Instance()->generateRandomColor();

    setPlayersName();
}

GameManager::~GameManager()
{
}

void GameManager::setPlayersName(){
    player_[first].setName("Unknown");
    player_[second].setName("Unknown");
}

Color GameManager::getPlayersTurn(){
    return playersTurn_;
}

void GameManager::endPlayersTurn(){
    playersTurn_ = (Color)(!(bool)playersTurn_);
}

const Player& GameManager::getFirstPlayer(){
    return player_[first];
}

const Player& GameManager::getSecondPlayer(){
    return player_[second];
}