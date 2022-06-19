#ifndef BOARD_H
#define BOARD_H

template<int N, typename T>
class Board
{
public:
    int getSize() {
        return N;
    }
    
    int getElement(int x, int y){
        return array_[x][y];
    }
    
private:
    T array_[N][N];
};

#endif // BOARD_H
