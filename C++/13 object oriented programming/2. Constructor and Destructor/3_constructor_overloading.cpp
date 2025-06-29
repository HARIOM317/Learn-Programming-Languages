#include <iostream>

using namespace std;

class complex
{
    int a, b;

public:
    complex()
    {
        a = 0;
        b = 0;
    }

    complex(int x)
    {
        a = x;
        b = 0;
    }

    complex(int x, int y)
    {
        a = x;
        b = y;
    }

    void printNumber()
    {
        cout << "Complex number: " << a << " + " << b << "i" << endl;
    }
};

int main()
{
    cout << "constructor overloading:" << endl;
    complex c3;
    c3.printNumber();

    cout << "\nconstructor overloading first:" << endl;
    complex c2(7);
    c2.printNumber();

    cout << "\nconstructor overloading second:" << endl;
    complex c1(4, 6);
    c1.printNumber();

    return 0;
}