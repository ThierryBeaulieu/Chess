#ifndef BOARD_H
#define BOARD_H

template<int N, typename T>
class Board
{
public:
    Board(){
        // initialise the array
        for(int i = 0; i < N; i++){
            for(int j = 0; j < N; j++){
                array_[i][j] = nullptr;
            }
        }
    }
    int getSize() {
        return N;
    }
    
    T* getElement(int x, int y){
        return array_[x][y];
    }
    
private:
    T* array_[N][N];
};

#endif // BOARD_H
