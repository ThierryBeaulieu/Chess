
#include "GameManager.h"
#include <iostream>

GameManager::GameManager()
{
    std::cout << board_.getSize() << std::endl;
    std::cout << board_.getElement(5,3) << std::endl;
}

GameManager::~GameManager()
{
}

void GameManager::initialize(){
    board_.getSize();
}
