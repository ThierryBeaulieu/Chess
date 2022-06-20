
#include "GameManager.h"
#include <iostream>

GameManager::GameManager()
{
    state_ = State::none;
    playersTurn_ = Random::Instance()->generateRandomNumber(0, 1);
}

GameManager::~GameManager()
{
}

void GameManager::initialize(){
    
}

void GameManager::chosePlayerAtRandom(){
    playersTurn_ = rand() % nbPlayers_;
}

bool GameManager::getPlayersTurn(){
    return playersTurn_;
}

void GameManager::endPlayersTurn(){
    playersTurn_ = !playersTurn_;
}
