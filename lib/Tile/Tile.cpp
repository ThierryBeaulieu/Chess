#include "Tile.h"

Tile::Tile():content_(nullptr)
{
}

Tile::~Tile()
{
}

std::shared_ptr<Piece> Tile::getContent(){
    return content_;
}

void Tile::setContent(std::shared_ptr<Piece> content){
    content_ = content;
}
