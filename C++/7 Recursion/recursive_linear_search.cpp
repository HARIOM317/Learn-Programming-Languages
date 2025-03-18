#include <iostream>

using namespace std;

bool recursiveLinearSearch(int arr[], int n, int key)
{
    if (n == 0)
        return false;
    if (arr[0] == key)
        return true;
    return recursiveLinearSearch(arr + 1, n - 1, key);
}

int main()
{
    int arr[10] = {7, 3, 5, 9, 11, 35, 26, 19, 55, 80};

    int key = 19;

    cout << key << " is present in array: " << (recursiveLinearSearch(arr, 10, key) ? "Yes" : "No") << endl;

    return 0;
}