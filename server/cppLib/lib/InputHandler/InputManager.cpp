
#include "InputManager.h"

std::string InputManager::getRawPosition()
{
    bool isInputCorrect = false;
    std::string userInput;

    while (!isInputCorrect)
    {
        std::cout << "Position (A3)> ";
        userInput = InputHandler::getUserInput();
        isInputCorrect = InputHandler::verifyUserInput(userInput);
    }

    return userInput;
}

std::string InputManager::getRawPiece()
{
    bool isInputCorrect = false;
    std::string userInput;

    while (!isInputCorrect)
    {
        std::cout << "Piece (A3) > ";
        userInput = InputHandler::getUserInput();
        isInputCorrect = InputHandler::verifyUserInput(userInput);
    }

    return userInput;
}