#include <iostream>

using namespace std;

class Box
{
public:
    // Constructor
    Box()
    {
        cout << "Constructor called!" << endl;
    }

    // Destructo
    ~Box()
    {
        cout << "Destructor called!" << endl;
    }
};

int main()
{
    Box b1, b2;

    return 0;
}