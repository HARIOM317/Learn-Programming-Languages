#include <iostream>

using namespace std;

int main()
{
    int n, m;
    cout << "Enter row and column size for 2D array: ";
    cin >> n >> m;

    // creating dynamic 2D array
    int **arr = new int *[n];

    for (int i = 0; i < n; i++)
    {
        arr[i] = new int[m];
    }

    // taking input
    cout << "Enter array elements: " << endl;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> arr[i][j];
        }
    }

    // printing output
    cout << "\n2D array is:" << endl;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }

    // release 2D array memory from heap

    // step-1: Release all columns memory
    for (int i = 0; i < n; i++)
    {
        delete[] arr[i];
    }

    // step-2: Release row pointers
    delete[] arr;
    return 0;
}