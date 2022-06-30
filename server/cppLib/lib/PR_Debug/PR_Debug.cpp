#if PR_DEBUG

#include "PR_Debug.h"

namespace PR_Debug
{
    void printGameInTerminal(const GameManager &gameManager)
    {
        auto board = gameManager.getBoard();
        for (int i = boardSize_ - 1; i >= 0; i--)
        {
            for (int j = 0; j < boardSize_; j++)
            {
                auto piece = board.getTileContent(i, j);
                std::string pieceName = "      ";

                if (piece != nullptr)
                {
                    pieceName = piece->getName();
                    // TODO: Make a method that fills the names with spaces to make them looks equal
                }

                std::cout << "[" + pieceName + "(";
                std::cout << i;
                std::cout << ",";
                std::cout << j;
                std::cout << ")]";
            }
            std::cout << std::endl;
        }
    }
}

#endif