#include <iostream>

using namespace std;

template <class T>

void swapValue(T &a, T &b)
{
    T temp = a;
    a = b;
    b = temp;
}

int main()
{
    char x = 'H', y = 'M';
    swapValue(x, y);
    cout << "x = " << x << ", "
         << "y = " << y << endl;

    int x1 = 50, y1 = 100;
    swapValue(x1, y1);
    cout << "x1 = " << x1 << ", y1 = " << y1 << endl;

    float x2 = 501.55, y2 = 101.11;
    swapValue(x2, y2);
    cout << "x2 = " << x2 << ", y2 = " << y2 << endl;
    return 0;
}