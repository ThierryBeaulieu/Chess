#include <gtest/gtest.h>

#include "../lib/Board/Board.h"
#include "../lib/Pieces/Piece.h"
#include "../lib/GameManager/GameManager.h"
#include "../lib/GameManager/Color.h"

#include "../lib/Pieces/Bishop.h"
#include "../lib/Pieces/King.h"
#include "../lib/Pieces/Queen.h"
#include "../lib/Pieces/Pawn.h"
#include "../lib/Pieces/Rook.h"
#include "../lib/Pieces/Knight.h"

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
TEST(GameManagerTest, endPlayersTurn){
    GameManager manager;
    std::shared_ptr<Player> playersTurn = manager.getPlayersTurn();
    manager.endPlayersTurn();
    EXPECT_NE(playersTurn, manager.getPlayersTurn());
}


// verify if the pieces have the right positions
TEST(PiecesTest, constructor) {
    int xPos = 1;
    int yPos = 5;

    Rook rook(xPos, yPos);
    Position rookPos = rook.getPosition();
    EXPECT_EQ(rookPos.x, xPos);
    EXPECT_EQ(rookPos.y, yPos);

    Queen queen(xPos, yPos);
    Position queenPos = queen.getPosition();
    EXPECT_EQ(queenPos.x, xPos);
    EXPECT_EQ(queenPos.y, yPos);

    King king(xPos, yPos);
    Position kingPos = king.getPosition();
    EXPECT_EQ(kingPos.x, xPos);
    EXPECT_EQ(kingPos.y, yPos);

    Knight knight(xPos, yPos);
    Position knightPos = knight.getPosition();
    EXPECT_EQ(knightPos.x, xPos);
    EXPECT_EQ(knightPos.y, yPos);

    Bishop bishop(xPos, yPos);
    Position bishopPos = bishop.getPosition();
    EXPECT_EQ(bishopPos.x, xPos);
    EXPECT_EQ(bishopPos.y, yPos);

    Pawn pawn(xPos, yPos);
    Position pawnPos = pawn.getPosition();
    EXPECT_EQ(pawnPos.x, xPos);
    EXPECT_EQ(pawnPos.y, yPos);
}