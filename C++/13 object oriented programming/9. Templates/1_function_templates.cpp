#include <iostream>
using namespace std;

template <typename T>

T add(T a, T b)
{
    return a + b;
}

int main()
{
    cout << add(5, 3) << endl;                            // int
    cout << add(6.4, 4.75) << endl;                       // double
    cout << add(string("Hi "), string("there!")) << endl; // string

    return 0;
}