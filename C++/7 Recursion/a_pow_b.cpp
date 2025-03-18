#include <iostream>

using namespace std;

int pow(int a, int b)
{
    if (b == 0)
        return 1;
    return a * pow(a, b - 1);
}

int fastExponentiation(int a, int b)
{
    // base case
    if (b == 0)
        return 1;
    if (b == 1)
        return a;

    // recursive call
    int ans = fastExponentiation(a, b / 2);

    if (b & 1) // if b is odd
        return a * ans * ans;
    else
        return ans * ans;
}

int main()
{
    int a = 2, b = 5;
    cout << pow(a, b) << endl;
    cout << fastExponentiation(a, b) << endl;

    return 0;
}