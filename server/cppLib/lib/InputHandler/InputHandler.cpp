
#include "../InputHandler/InputHandler.h"

std::string InputHandler::getUserInput()
{
    std::string userInput;

    // TODO: demander l'input en fonction de la plateform de l'utilisateur
    std::getline(std::cin, userInput);

    return userInput;
}

bool InputHandler::verifyUserInput(const std::string& userInput)
{
    if (userInput.size() != 2)
        return false;

    bool isBetweenaandz = userInput[0] >= 97 && userInput[0] <= 104;
    bool isBetweenAandZ = userInput[0] >= 65 && userInput[0] <= 72;
    bool isBetween1and8 = userInput[1] >= 49 && userInput[1] <= 56;

    if (!isBetweenAandZ && !isBetweenaandz)
        return false;

    if (!isBetween1and8)
        return false;

    return true;
}
