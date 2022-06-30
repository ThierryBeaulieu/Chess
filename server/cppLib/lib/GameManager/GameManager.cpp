#include "GameManager.h"

GameManager::GameManager()
{
    state_ = State::none;

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
// TODO: set pieces at their necessary position
    board_.setTileContent(std::make_shared<Rook>(0, 0));
    board_.setTileContent(std::make_shared<Rook>(0, 0));
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

State GameManager::getState() {
    return state_;
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