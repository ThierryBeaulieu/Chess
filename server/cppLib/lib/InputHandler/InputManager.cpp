
#include "InputManager.h"

Position InputManager::getPosition()
{
    bool isInputCorrect = false;
    Position piecePosition = {0, 0};

    while (!isInputCorrect)
    {
        std::cout << "Position (A3)> ";
        std::string userInput;
        userInput = InputHandler::getUserInput();
        isInputCorrect = InputHandler::verifyUserInput(userInput);
    }

    return piecePosition;
}

std::shared_ptr<Piece> InputManager::getPiece()
{
    bool isInputCorrect = false;
    std::shared_ptr<Piece> piece = nullptr;

    while (!isInputCorrect)
    {
        std::cout << "Piece (A3) > ";
        std::string userInput;
        userInput = InputHandler::getUserInput();
        isInputCorrect = InputHandler::verifyUserInput(userInput);
    }

    return piece;
}