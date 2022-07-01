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
    bool isUserInputValid = false;
    Position pieceDestination = { -1,-1 };
    std::shared_ptr<Piece> pieceToMove = nullptr;

    while (!isUserInputValid) {
        auto boardCopy = gameManager->getBoard();
        pieceDestination = boardCopy.getPosition(InputManager::getRawPosition());
        pieceToMove = boardCopy.getPiece(InputManager::getRawPiecePosition());

        if (pieceToMove != nullptr) {
            isUserInputValid = validatePlayerEntry(pieceDestination, pieceToMove);   
        }
        else {
            std::cout << "La pièce à bouger est absente de la case" << std::endl;
        }
    }

    changePiecePosition(gameManager, pieceToMove, pieceDestination);

    //set the selected piece to a new position
    // if the user click on the same piece again, ask him what he wants again

    // end the users turn.

}

void Player::changePiecePosition(std::shared_ptr<GameManager> gameManager, std::shared_ptr<Piece> pieceToMove, Position newPosition) {
    std::pair<bool, std::shared_ptr<Piece>> moveResult = gameManager->movePiece(pieceToMove, newPosition);

    if (moveResult.first == false) {
        std::cout << "Le move n'est pas correct" << std::endl;
        return;
    }
    if (moveResult.second != nullptr) {
        std::cout << "La piece " << moveResult.second->getName() << " a été détruite" << std::endl;
    }
}

bool Player::validatePlayerEntry(Position positionWanted, std::shared_ptr<Piece> pieceToMove) {
    const std::vector<Position> possibleMoves = pieceToMove->getPossibleMoves();

    for (Position pos : possibleMoves)
    {
        if (positionWanted.x == pos.x && positionWanted.y == pos.y) {
            return true;
        }
    }
}

State Player::getState() {
    return state_;
}

void Player::setState(State state) {
    state_ = state;
}

