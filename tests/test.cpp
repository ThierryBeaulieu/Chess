#include <gtest/gtest.h>

#include <iostream>

#include "../lib/Board/Board.h"
#include "../lib/Pieces/Piece.h"
#include "../lib/GameManager/GameManager.h"
#include "../lib/GameManager/Color.h"

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
    Player * playersTurn = manager.getPlayersTurn();
    manager.endPlayersTurn();
    EXPECT_NE(playersTurn, manager.getPlayersTurn());
}
