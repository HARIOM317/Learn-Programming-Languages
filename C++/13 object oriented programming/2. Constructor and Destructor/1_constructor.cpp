#include <iostream>

using namespace std;

class Box
{
public:
    Box()
    {
        cout << "Constructor called!" << endl;
    }
};

int main()
{
    Box b1, b2;

    return 0;
}