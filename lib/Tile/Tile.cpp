#include "Tile.h"

Tile::Tile():content_(nullptr)
{
}

Tile::~Tile()
{
}

std::shared_ptr<Piece> Tile::getContent() const {
    return content_;
}

void Tile::setContent(const std::shared_ptr<Piece>& content){
    content_ = content;
}
