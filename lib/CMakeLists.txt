cmake_minimum_required(VERSION 3.0)

set(This ChessLib)

set(Source 
    Pieces/Bishop.cpp
    Pieces/King.cpp
    Pieces/Queen.cpp
    Pieces/Knight.cpp
    Pieces/Pawn.cpp
    Pieces/Piece.cpp
    Pieces/Rook.cpp
    Board/Board.cpp
    GameManager/GameManager.cpp
    Player/Player.cpp
    Tile/Tile.cpp
)

set(Header 
    Pieces/Bishop.h
    Pieces/King.h
    Pieces/Queen.h
    Pieces/Knight.h
    Pieces/Pawn.h
    Pieces/Piece.h
    Pieces/Rook.h
    Board/Board.h
    GameManager/GameManager.h
    Player/Player.h
    Tile/Tile.h
    Position/Position.h
)

add_library(
    ${This}
    STATIC
    ${Source}
    ${Header}
)