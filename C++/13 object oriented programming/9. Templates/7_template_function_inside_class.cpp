#include <iostream>

using namespace std;

class Calculator
{
public:
    template <typename T>
    T add(T a, T b)
    {
        return a + b;
    }
};

int main()
{
    Calculator c;

    cout << c.add(5, 10) << endl;
    cout << c.add(5.6, 11.3) << endl;
    cout << c.add(string("Hello "), string("World!")) << endl;

    return 0;
}