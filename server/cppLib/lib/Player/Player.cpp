#include "Player.h"

Player::Player() : name_("Unknown"), color_(Color::unknown), state_(State::firstMove) {
    
}

Player::~Player()
{
}

void Player::addPersonnalPiece(std::shared_ptr<Piece> piece) {
    pieces_.push_back(piece);
}

const Color& Player::getColor() const {
    return color_;
}

void Player::setColor(const Color& color) {
    color_ = color;
}

const std::string& Player::getName() const {
    return name_;
}

void Player::setName(const std::string& name) {
    name_ = name;
}


std::shared_ptr<Piece> Player::getPieceToMove() {
    // ask the user for the wanted piece
    return std::make_shared<King>(0, 0);
}

void Player::play(std::shared_ptr<GameManager> gameManager) {

    // Ask the user what piece he wants
    bool playerEntryIsValid = false;

    while (!playerEntryIsValid) {
        std::string pieceToMove = InputManager::getRawPiecePosition();
        std::string rawPosition = InputManager::getRawPosition();

        const Board<boardSize_> board = gameManager->getBoard();
        //Position position = board.getPosition(rawPosition);
        //std::shared_ptr<Piece> pieceWanted = board.getPiece(pieceToMove);
        //const std::vector<Position> possiblePosition = pieceToMove->getPossibleMoves();
        playerEntryIsValid = true;
    }


    // tell the user the available positions

    // if the position is correct, set the selected piece to a new position
    // if the user click on the same piece again, ask him what he wants again

    // end the users turn.

}

State Player::getState() {
    return state_;
}

void Player::setState(State state) {
    state_ = state;
}

