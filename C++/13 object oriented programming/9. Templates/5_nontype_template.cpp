#include <iostream>
using namespace std;

template <typename T, int size>

class Array
{
    T arr[size];

public:
    // Constructor to intialize all elements with a given default value
    Array(T defaultValue = T())
    {
        for (int i = 0; i < size; i++)
        {
            arr[i] = defaultValue;
        }
    }

    void set(int index, T value)
    {
        arr[index] = value;
    }

    T get(int index)
    {
        return arr[index];
    }

    int length()
    {
        return size;
    }
};

int main()
{
    // Array of integer
    Array<int, 5> arr(0); // default value: 0

    arr.set(0, 100);
    arr.set(2, 200);
    arr.set(3, 300);

    for (int i = 0; i < arr.length(); i++)
    {
        cout << arr.get(i) << " ";
    }

    // Array of string
    Array<string, 5> str("null str"); // default value = "null str"

    str.set(0, "Hariom");
    str.set(1, "Abhishek");

    cout << "\n\n"
         << str.get(0) << endl;
    cout << str.get(1) << endl;
    cout << str.get(2) << endl;

    return 0;
}