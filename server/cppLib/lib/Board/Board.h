#ifndef BOARD_H
#define BOARD_H


#include "../Tile/Tile.h"
#include "../Pieces/Piece.h"

template<int N>
class Board
{
public:
    Board(){
        // initialise the array
        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                array_[i][j].setContent(nullptr);
            }
        }
    }
    
    int getSize() {
        return N;
    }
    
    void setElement(std::shared_ptr<Piece> content){
        const Position position = content->getPosition();
        array_[position.x][position.y].setContent(content);
    }
    
    std::shared_ptr<Piece> getElement(int x, int y){
        return array_[x][y].getContent();
    }
    
private:
    Tile array_[N][N];
};

#endif // BOARD_H
