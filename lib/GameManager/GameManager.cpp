
#include "GameManager.h"

GameManager::GameManager()
{
    state_ = State::none;
    playersTurn_ = Random::Instance()->generateRandomNumber(0, 1);
    setPlayersName();
}

GameManager::~GameManager()
{
}

void GameManager::setPlayersName(){
    player_[first].setName("Unknown");
    player_[second].setName("Unknown");
}

bool GameManager::getPlayersTurn(){
    return playersTurn_;
}

void GameManager::endPlayersTurn(){
    playersTurn_ = !playersTurn_;
}

const Player& GameManager::getFirstPlayer(){
    return player_[first];
}

const Player& GameManager::getSecondPlayer(){
    return player_[second];
}