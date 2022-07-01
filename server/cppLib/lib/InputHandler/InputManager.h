#ifndef INPUTMANAGER_H
#define INPUTMANAGER_H

#include <memory>
#include <iostream>
#include <string>

#include "../Pieces/Piece.h"
#include "../GameManager/Position.h"
#include "InputHandler.h"

class InputManager
{
public:
    static std::string getRawPosition();
    static std::string getRawPiecePosition();
};

#endif /* InputManager.h */