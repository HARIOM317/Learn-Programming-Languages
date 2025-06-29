#include <iostream>
using namespace std;

template <typename T>

class Box
{
    T value;

public:
    Box(T val) : value(val) {}

    void show()
    {
        cout << "Value: " << value << endl;
    }
};

int main()
{
    Box<int> b1(10);
    Box<string> b2("Hello");

    b1.show();
    b2.show();

    return 0;
}