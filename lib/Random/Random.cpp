
#include "Random.h"

Random *Random::instance_ = 0;

Random::Random()
{
    time_t t;
    srand((unsigned)time(&t));
}

Random *Random::Instance()
{
    if (instance_ == 0)
    {
        instance_ = new Random();
    }
    return instance_;
}

int Random::generateRandomNumber(int min, int max)
{
    return rand() % (max - min + 1) + min;
}