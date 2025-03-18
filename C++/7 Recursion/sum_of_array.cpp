#include <iostream>

using namespace std;

int arraySum(int arr[], int n)
{
    if (n == 0)
        return 0;
    if (n == 1)
        return arr[0];
    return arr[n - 1] + arraySum(arr, n - 1);
}

int main()
{
    int arr[10] = {10, 10, 20, 20, 30, 30, 40, 40, 50, 50};

    cout << "Sum of array: " << arraySum(arr, 10) << endl;

    return 0;
}