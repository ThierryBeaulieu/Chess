#include "InputManager.h"

std::string InputManager::getRawPiecePosition()
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

std::string InputManager::getRawPosition()
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

int InputManager::convertIntToIndex(char c) {
    return c - '0';
}

int InputManager::convertLetterToIndex(char c) {

    if (c == 'A' || c == 'a')
        return 0;

    if (c == 'B' || c == 'b')
        return 1;

    if (c == 'C' || c == 'c')
        return 2;

    if (c == 'D' || c == 'd')
        return 3;

    if (c == 'E' || c == 'e')
        return 4;

    if (c == 'F' || c == 'f')
        return 5;

    if (c == 'G' || c == 'g')
        return 6;

    if (c == 'H' || c == 'h')
        return 7;

    return -1;
}