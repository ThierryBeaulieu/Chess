
#include "GameManager.h"
#include <iostream>

GameManager::GameManager()
{
    time_t t;
    srand((unsigned) time(&t));
    state_ = State::none;
}

GameManager::~GameManager()
{
}

void GameManager::initialize(){
    
}

bool GameManager::chosePlayerAtRandom(){
    return rand() % nbPlayers_;
}

int GameManager::getPlayersTurn(){
    return playersTurn_;
}

void GameManager::endPlayersTurn(){
    playersTurn_ += 1 % 2;
}
