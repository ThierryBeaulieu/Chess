#ifndef INPUTHANDLER_H
#define INPUTHANDLER_H

#include <string>
#include <iostream>

#include "../GameManager/Position.h"

class InputHandler
{
public:
	static std::string getUserInput();
	static bool verifyUserInput(const std::string& userInput);
private:
};

#endif // INPUTHANDLER_H