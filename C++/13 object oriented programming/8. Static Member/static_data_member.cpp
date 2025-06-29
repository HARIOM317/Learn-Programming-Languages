#include <iostream>

using namespace std;

class Counter
{
public:
    // static data member
    static int count;
    Counter()
    {
        count++;
    }
};

// initialize counter to 0
int Counter::count = 0;

int main()
{
    Counter c1, c2, c3;
    cout << "Total objects : " << Counter::count << endl;

    return 0;
}