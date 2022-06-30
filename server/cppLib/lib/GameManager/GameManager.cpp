#include "GameManager.h"

GameManager::GameManager()
{
    int minInterval = 0;
    int maxInterval = 1;
    indexOfCurrentPlayer_ = Random::Instance()->generateRandomNumber(minInterval, maxInterval);
    currentPlayer_ = player_[indexOfCurrentPlayer_];

    initializePlayers();
    initializeBoard();
}

GameManager::~GameManager()
{
}

void GameManager::initializeBoard() {

    initializePlayersBoard(Color::white);
    initializePlayersBoard(Color::black);
}

void GameManager::initializePlayersBoard(Color colorWanted) {

    int color = -1;
    int indexOfPawn = -1;
    int indexOfUniquePieces = -1;

    if (colorWanted == Color::white) {
        color = white_;
        indexOfPawn = 1;
        indexOfUniquePieces = 0;
    } else {
        color = black_;
        indexOfPawn = 6;
        indexOfUniquePieces = 7;
    }

    std::shared_ptr<Rook> rook1 = std::make_shared<Rook>(0, indexOfUniquePieces);
    board_.setTileContent(rook1);
    player_[color]->addPersonnalPiece(rook1);

    std::shared_ptr<Knight> knight1 = std::make_shared<Knight>(1, indexOfUniquePieces);
    board_.setTileContent(knight1);
    player_[color]->addPersonnalPiece(knight1);

    std::shared_ptr<Bishop> bishop1 = std::make_shared<Bishop>(2, indexOfUniquePieces);
    board_.setTileContent(bishop1);
    player_[color]->addPersonnalPiece(bishop1);

    std::shared_ptr<King> king = std::make_shared<King>(3, indexOfUniquePieces);
    board_.setTileContent(king);
    player_[color]->addPersonnalPiece(king);

    std::shared_ptr<Queen> queen = std::make_shared<Queen>(4, indexOfUniquePieces);
    board_.setTileContent(queen);
    player_[color]->addPersonnalPiece(queen);

    std::shared_ptr<Bishop> bishop2 = std::make_shared<Bishop>(5, indexOfUniquePieces);
    board_.setTileContent(bishop2);
    player_[color]->addPersonnalPiece(bishop2);

    std::shared_ptr<Knight> knight2 = std::make_shared<Knight>(6, indexOfUniquePieces);
    board_.setTileContent(knight2);
    player_[color]->addPersonnalPiece(knight2);

    std::shared_ptr<Rook> rook2 = std::make_shared<Rook>(7, indexOfUniquePieces);
    board_.setTileContent(rook2);
    player_[color]->addPersonnalPiece(rook2);

    for (int i = 0; i < boardSize_; i++) {
        std::shared_ptr<Pawn> pawn = std::make_shared<Pawn>(i, indexOfPawn);
        board_.setTileContent(pawn);
        player_[color]->addPersonnalPiece(pawn);
    }
}

void GameManager::initializePlayers() {
    player_[first] = std::make_shared<Player>();
    player_[second] = std::make_shared<Player>();
    setPlayersColor();
    setPlayersName();
}

void GameManager::setPlayersColor() {
    player_[indexOfCurrentPlayer_]->setColor(Color::white);
    white_ = indexOfCurrentPlayer_;
    
    int indexOfSecondPlayer = (indexOfCurrentPlayer_ + 1) % 2;
    player_[indexOfSecondPlayer]->setColor(Color::black);
    black_ = indexOfSecondPlayer;
}

void GameManager::setPlayersName(){
    player_[first]->setName("Unknown");
    player_[second]->setName("Unknown");
}

std::shared_ptr<Player> GameManager::getPlayersTurn() const{
    return currentPlayer_;
}

void GameManager::endPlayersTurn(){
    indexOfCurrentPlayer_ = (indexOfCurrentPlayer_ + 1) % 2;
    currentPlayer_ = player_[indexOfCurrentPlayer_];
}

std::shared_ptr<Player> GameManager::getFirstPlayer() const{
    return player_[first];
}

std::shared_ptr<Player> GameManager::getSecondPlayer() const{
    return player_[second];
}

const Board<boardSize_> GameManager::getBoard() const {
    return board_;
}