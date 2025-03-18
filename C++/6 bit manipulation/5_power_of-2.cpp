#include <iostream>
using namespace std;

// using loop
bool powerOf2(int n)
{
    while (n > 1)
    {
        if (n % 2 != 0)
        {
            return false;
        }
        n = n << 2;
    }

    return true;
}

// using bitwise operator
int isPowerOf2(int n)
{
    return (n && !(n & n - 1));
}

int main()
{
    cout << (isPowerOf2(16) == 1 ? "Yes" : "No") << endl;
    return 0;
}