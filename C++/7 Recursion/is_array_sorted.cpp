#include <iostream>

using namespace std;

bool isArraySorted(int arr[], int size)
{
    if (size == 0 || size == 1)
        return true;
    if (arr[0] > arr[1])
        return false;

    return isArraySorted(arr + 1, size - 1);
}

int main()
{
    int arr[10] = {6, 9, 13, 16, 20, 28, 35, 49, 55, 60};

    cout << "Is Array Sorted: " << (isArraySorted(arr, 10) ? "Yes" : "No") << endl;

    return 0;
}