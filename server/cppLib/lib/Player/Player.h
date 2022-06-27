#ifndef PLAYER_H
#define PLAYER_H

#include <vector>
#include <string>
#include <memory>

#include "../Pieces/Piece.h"
#include "../GameManager/Color.h"
#include "../InputHandler/InputHandler.h"
#include "../Pieces/King.h"

class Player
{
public:
    Player();
    ~Player();
    
    void play();

    const std::string& getName() const;
    void setName(const std::string& name);
    
    const Color& getColor() const;
    void setColor(const Color& color);

    std::shared_ptr<Piece> getPieceToMove();
    
private:
    Color color_;
    std::string name_;
    std::vector<Piece> pieces_;
};
#endif // PLAYER_H
