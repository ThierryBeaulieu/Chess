#ifndef RANDOM_H
#define RANDOM_H

#include <cstdlib>
#include <ctime>

class Random
{
public:
    static Random *Instance();
    int generateRandomNumber(int min, int max);

protected:
    Random();

private:
    static Random *instance_;
};

#endif // RANDOM_H