#ifndef TILE_H
#define TILE_H

#include <memory>

#include "../Pieces/Piece.h"

class Tile
{
public:
    Tile();
    ~Tile();
    
    std::shared_ptr<Piece> getContent() const;
    void setContent(const std::shared_ptr<Piece>& element);
    
private:
    std::shared_ptr<Piece> content_;
};

#endif // TILE_H
