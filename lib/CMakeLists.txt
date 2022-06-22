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
    GameManager/GameManager.cpp
    Player/Player.cpp
    Tile/Tile.cpp
    Random/Random.cpp
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
    GameManager/InputHandler.h
    GameManager/Position.h
    GameManager/Color.h
    GameManager/State.h
    Player/Player.h
    Tile/Tile.h
    Random/Random.h
)

add_library(
    ${This}
    STATIC
    ${Source}
    ${Header}
)