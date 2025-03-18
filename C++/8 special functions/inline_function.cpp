#include <iostream>

using namespace std;

inline int square(int n) { return n * n; }
inline int cube(int n) { return n * n * n; }
inline int sumOfFirstNNumbers(int n) { return (n * (n + 1)) / 2; }

int main()
{
    int n = 10;

    cout << "Square of" << n << " is " << square(10) << endl;
    cout << "Cube of" << n << " is " << cube(10) << endl;
    cout << "Sum of first " << n << " natural number is: " << sumOfFirstNNumbers(n) << endl;

    return 0;
}