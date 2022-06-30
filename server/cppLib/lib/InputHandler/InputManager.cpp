
#include "InputManager.h"

Position InputManager::getPosition()
{
    bool isInputCorrect = false;
    Position piecePosition = {0, 0};

    while (!isInputCorrect)
    {
        std::cout << "Position > ";
        std::string userInput;
        userInput = InputHandler::getUserInput();
        std::cout << std::endl;
        isInputCorrect = verifyUserInput(userInput);
    }
    return piecePosition;
}

std::shared_ptr<Piece> InputManager::getPiece()
{
    std::shared_ptr<Piece> piece = nullptr;
    std::cout << "Piece (x, y) > ";
    std::string userInput;
    userInput = InputHandler::getUserInput();
    return piece;
}

bool InputManager::verifyUserInput(const std::string &userInput)
{
    return false;
}