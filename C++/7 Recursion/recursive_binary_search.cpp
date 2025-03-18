#include <iostream>

using namespace std;

bool recursiveBinarySearch(int arr[], int key, int start, int end)
{
    if (start > end)
        return false;

    int mid = start + (end - start) / 2;

    if (arr[mid] < key)
        return recursiveBinarySearch(arr, key, mid + 1, end);
    else if (arr[mid] > key)
        return recursiveBinarySearch(arr, key, start, mid - 1);
    return true;
}

int main()
{
    int arr[10] = {3, 6, 8, 10, 12, 15, 19, 22, 25, 30};
    int key = 10;

    cout << key << " is present in array: " << (recursiveBinarySearch(arr, key, 0, 9) ? "Yes" : "No") << endl;

    return 0;
}