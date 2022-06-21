
#include "GameManager.h"

GameManager::GameManager()
{
    state_ = State::none;
    int minInterval = 0;
    int maxInterval = 1;
    indexOfCurrentPlayer_ = Random::Instance()->generateRandomNumber(minInterval, maxInterval);
    currentPlayer_ = &player_[indexOfCurrentPlayer_];
    setPlayersName();
}

GameManager::~GameManager()
{
}

void GameManager::setPlayersName(){
    player_[first].setName("Unknown");
    player_[second].setName("Unknown");
}

Player * GameManager::getPlayersTurn() const{
    return currentPlayer_;
}

void GameManager::endPlayersTurn(){
    indexOfCurrentPlayer_ = (1 + indexOfCurrentPlayer_) % 2;
    currentPlayer_ = &player_[indexOfCurrentPlayer_];
}

const Player& GameManager::getFirstPlayer() const{
    return player_[first];
}

const Player& GameManager::getSecondPlayer() const{
    return player_[second];
}