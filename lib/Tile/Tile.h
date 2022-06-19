#ifndef TILE_H
#define TILE_H

#include <memory>

#include "../Pieces/Piece.h"
#include <memory>

class Tile
{
public:
    Tile();
    ~Tile();
    
    std::shared_ptr<Piece> getContent();
    void setContent(std::shared_ptr<Piece> element);
    
private:
    std::shared_ptr<Piece> content_;
};

#endif // TILE_H
