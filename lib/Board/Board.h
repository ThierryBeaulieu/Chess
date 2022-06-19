#ifndef BOARD_H
#define BOARD_H

template<int N, typename T>
class Board
{
public:
    Board();
    ~Board();
private:
    T array_[N][N];
};

#endif // BOARD_H
