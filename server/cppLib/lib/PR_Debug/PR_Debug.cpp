#if PR_DEBUG

#include "PR_Debug.h"

namespace PR_Debug
{
    void printGameInTerminal(const GameManager &gameManager)
    {
        auto board = gameManager.getBoard();
        for (int j = boardSize_ - 1; j >= 0; j--)
        {
            for (int i = 0; i < boardSize_; i++)
            {
                auto piece = board.getTileContent(i, j);
                std::string pieceName = "      ";

                if (piece != nullptr)
                {
                    pieceName = piece->getName();
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