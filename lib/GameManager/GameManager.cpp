
#include "GameManager.h"
#include <iostream>

GameManager::GameManager()
{
    std::cout << board_.getSize() << std::endl;
    std::cout << board_.getElement(4,4) << std::endl;
}

GameManager::~GameManager()
{
}

void GameManager::initialize(){
    board_.getSize();
}
