#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    // To count 1's of a number
    int n1 = 15;
    long int n2 = 30;
    long long int n3 = 60;

    cout << __builtin_popcount(n1) << endl;
    cout << __builtin_popcountl(n2) << endl;
    cout << __builtin_popcountll(n3) << endl;

    return 0;
}