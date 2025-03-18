#include <iostream>

using namespace std;

int main()
{
    int n;
    cout << "Enter array size: ";
    cin >> n;

    // allocating array in heap memory dynamically of n size
    int *arr = new int[n];

    cout << "Enter array elements: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    cout << "\nArray is: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    // release array memory from heap
    delete[] arr;

    return 0;
}