
#include "GameManager.h"
#include <iostream>

GameManager::GameManager()
{
    time_t t;
    srand((unsigned) time(&t));
    state_ = State::none;
    
    chosePlayerAtRandom();
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
