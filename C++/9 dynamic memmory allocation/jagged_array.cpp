#include <iostream>

using namespace std;

int main()
{
    int row;
    row = 3;

    int sizes[] = {4, 3, 5}; // size for each row

    int **arr = new int *[row]; // allocating n rows
    // allocating row's memory with different sizes
    for (int i = 0; i < row; i++)
    {
        *(arr + i) = new int[sizes[i]];
    }

    // taking input in jagged array
    cout << "Enter zagged array elements: " << endl;
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < sizes[i]; j++)
        {
            cin >> arr[i][j];
        }
    }

    // printing output
    cout << "\nYour zagged array is-" << endl;
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < sizes[i]; j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}