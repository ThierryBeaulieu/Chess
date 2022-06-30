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
    static Position getPosition();
    static std::shared_ptr<Piece> getPiece();
};

#endif /* InputManager.h */