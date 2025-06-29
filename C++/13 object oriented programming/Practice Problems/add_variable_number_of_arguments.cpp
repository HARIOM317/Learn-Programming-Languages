#include <iostream>

using namespace std;

// Base case: Only one argument left
template <typename T>
T add(T a)
{
    return a;
}

// Recursive case: More than one arguments
template <typename T, typename... Args>
T add(T first, Args... rest)
{
    return first + add(rest...); // Recursion
}

int main()
{
    cout << "Sum: " << add(10, 20, 30, 40, 50) << endl;
    cout << "Sum: " << add(1.1, 2.2, 3.3) << endl;
    cout << add(string("Hi "), string("There"));

    return 0;
}