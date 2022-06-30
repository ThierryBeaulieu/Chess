
#include "../InputHandler/InputHandler.h"

namespace InputHandler
{
    std::string getUserInput()
    {
        std::string userInput;

        // TODO: demander l'input en fonction de la plateform de l'utilisateur
        std::getline(std::cin, userInput);

        return userInput;
    }
}
