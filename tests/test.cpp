#include <gtest/gtest.h>

#include <iostream>

#include "../lib/Board/Board.h"
#include "../lib/Pieces/Piece.h"
#include "../lib/GameManager/GameManager.h"
#include "../lib/GameManager/Color.h"


// should return random numbers between 1 and 0
TEST(GameManagerTest, generateRandomTurns){

    
    int maxCicle = 10000;
    int sum = 0;
    
    for(int i = 0; i < maxCicle; i++){
        GameManager * manager = new GameManager();
        sum += (int) manager->getPlayersTurn();
        delete manager;
    }
    
    EXPECT_GT(sum, 0);
    EXPECT_LT(sum, 10000);
    
    bool isInRange = false;
    GameManager manager;
    if ((int) manager.getPlayersTurn() == 1
        || (int) manager.getPlayersTurn() == 0) {
        isInRange = true;
    }
    
    EXPECT_EQ(isInRange, true);
}

// verify if the content of the board is initialize at nullptr
TEST(BoardTest, BoardBaseConstructor){
    static const int boardWidth = 8;
    Board<boardWidth> board;
    
    for(int i = 0; i < boardWidth; i++){
        for(int j = 0; j < boardWidth; j++){
            EXPECT_EQ(board.getElement(i, j), nullptr);
        }
    }
}

// verify if the players turn will end
TEST(GameMangerTest, endPlayersTurn){
    GameManager manager;
    Color playersTurn = manager.getPlayersTurn();
    manager.endPlayersTurn();
    EXPECT_NE(playersTurn, manager.getPlayersTurn());
}
