#include <iostream>

using namespace std;

template <typename T> // T is a placeholder for any data type

T findMax(T a, T b)
{
    return (a > b) ? a : b;
}

int main()
{
    cout << "Max : " << findMax(10, 20) << endl;
    cout << "Max : " << findMax(3.5, 2.5) << endl;
    cout << "Max : " << findMax('A', 'C') << endl;

    return 0;
}