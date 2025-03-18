#include <iostream>

using namespace std;

template <typename T> // T can be int, float, double, char etc.

class Box
{
    T value;

public:
    Box(T val)
    {
        value = val;
    }

    void getValue()
    {
        cout << "Value : " << value << endl;
    }
};

int main()
{
    Box<int> intBox(10);
    Box<double> doubleBox(25.725);
    Box<char> charBox('A');

    intBox.getValue();
    doubleBox.getValue();
    charBox.getValue();

    return 0;
}