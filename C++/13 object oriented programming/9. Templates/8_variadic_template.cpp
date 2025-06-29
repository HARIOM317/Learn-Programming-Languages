#include <iostream>

using namespace std;

// NOTE: Used when the number of arguments is unknown.
void print() {}

// To print multiple values
template <typename T, typename... Args>
void print(T first, Args... rest)
{
    cout << first << " ";
    print(rest...); // Recursion
}

int main()
{
    print(1, 2.5, "Hello", 'A');

    return 0;
}