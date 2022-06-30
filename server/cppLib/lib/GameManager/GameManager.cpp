#include "GameManager.h"

GameManager::GameManager()
{
    int minInterval = 0;
    int maxInterval = 1;
    indexOfCurrentPlayer_ = Random::Instance()->generateRandomNumber(minInterval, maxInterval);
    currentPlayer_ = player_[indexOfCurrentPlayer_];

    initializeBoard();
    initializePlayers();
}

GameManager::~GameManager()
{
}

void GameManager::initializeBoard() {
    // white
    board_.setTileContent(std::make_shared<Rook>  (0, 0));
    board_.setTileContent(std::make_shared<Knight>(1, 0));
    board_.setTileContent(std::make_shared<Bishop>(2, 0));
    board_.setTileContent(std::make_shared<King>  (3, 0));
    board_.setTileContent(std::make_shared<Queen> (4, 0));
    board_.setTileContent(std::make_shared<Bishop>(5, 0));
    board_.setTileContent(std::make_shared<Knight>(6, 0));
    board_.setTileContent(std::make_shared<Rook>  (7, 0));

    board_.setTileContent(std::make_shared<Pawn>(0, 1));
    board_.setTileContent(std::make_shared<Pawn>(1, 1));
    board_.setTileContent(std::make_shared<Pawn>(2, 1));
    board_.setTileContent(std::make_shared<Pawn>(3, 1));
    board_.setTileContent(std::make_shared<Pawn>(4, 1));
    board_.setTileContent(std::make_shared<Pawn>(5, 1));
    board_.setTileContent(std::make_shared<Pawn>(6, 1));
    board_.setTileContent(std::make_shared<Pawn>(7, 1));

    // black
    board_.setTileContent(std::make_shared<Rook>  (0, 7));
    board_.setTileContent(std::make_shared<Knight>(1, 7));
    board_.setTileContent(std::make_shared<Bishop>(2, 7));
    board_.setTileContent(std::make_shared<King>  (3, 7));
    board_.setTileContent(std::make_shared<Queen> (4, 7));
    board_.setTileContent(std::make_shared<Bishop>(5, 7));
    board_.setTileContent(std::make_shared<Knight>(6, 7));
    board_.setTileContent(std::make_shared<Rook>  (7, 7));

    board_.setTileContent(std::make_shared<Pawn>(0, 6));
    board_.setTileContent(std::make_shared<Pawn>(1, 6));
    board_.setTileContent(std::make_shared<Pawn>(2, 6));
    board_.setTileContent(std::make_shared<Pawn>(3, 6));
    board_.setTileContent(std::make_shared<Pawn>(4, 6));
    board_.setTileContent(std::make_shared<Pawn>(5, 6));
    board_.setTileContent(std::make_shared<Pawn>(6, 6));
    board_.setTileContent(std::make_shared<Pawn>(7, 6));

}

void GameManager::initializePlayers() {
    player_[first] = std::make_shared<Player>();
    player_[second] = std::make_shared<Player>();
    setPlayersColor();
    setPlayersName();
}

void GameManager::setPlayersColor() {
    player_[indexOfCurrentPlayer_]->setColor(Color::white);
    
    int indexOfSecondPlayer = (indexOfCurrentPlayer_ + 1) % 2;
    player_[indexOfSecondPlayer]->setColor(Color::black);
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