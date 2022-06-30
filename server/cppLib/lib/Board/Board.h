#ifndef BOARD_H
#define BOARD_H

#include <utility>


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
                tile_[i][j].setContent(nullptr);
            }
        }
    }
    
    int getSize() {
        return N;
    }


    // The methode should only be used to initialize board
    void setTileContent(std::shared_ptr<Piece> piece){
        const Position position = piece->getPosition();
        if (tile_[position.x][position.y].getContent() != nullptr) {
            exit(EXIT_FAILURE); // stop intialization
        }
        tile_[position.x][position.y].setContent(piece);
    }
    
    std::shared_ptr<Piece> getTileContent(int x, int y){
        return tile_[x][y].getContent();
    }

    /*
    * bool: if the move was permited
    * std::shared_ptr<Piece>: piece eaten if there's one
    */
    std::pair<bool, std::shared_ptr<Piece>> movePiece(std::shared_ptr<Piece> piece, Position newPosition) {

        bool isMoveLegit = verifyMoveValidity();
        std::shared_ptr<Piece> piecesAdr = nullptr;

        if (!isMoveLegit || piece == nullptr) {
            return std::make_pair(isMoveLegit, piecesAdr);
        }
        
        std::shared_ptr<Piece> currentPieceOnTile = this->getTileContent(newPosition.x, newPosition.y);
        piece->setPosition(newPosition);
        this->setTileContent(piece);

        return std::make_pair(isMoveLegit, piecesAdr);
    }

    bool verifyMoveValidity(Position newPosition) {
        if (newPosition.x >= 8 || newPosition.x < 0 || newPosition.y >= 8 || newPosition.y < 0)
            return false;
        return true;
    }

    
private:
    Tile tile_[N][N];
};

#endif // BOARD_H
