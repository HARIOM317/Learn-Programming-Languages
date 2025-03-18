#include <iostream>

using namespace std;

// 1. Non-Type Template Parameter (Integer Example)
template <int N>

void printNumbers()
{
    for (int i = 1; i <= N; i++)
    {
        cout << i << " ";
    }
    cout << endl;
}

// 2. Non-Type Template Parameter in a class
template <typename T, int SIZE>
class FixedArray
{
    T arr[SIZE];
    int size = SIZE;

public:
    void set(int index, T value)
    {
        arr[index] = value;
    }

    int get(int index)
    {
        return arr[index];
    }
};

int main()
{
    // Simple example
    printNumbers<5>();
    printNumbers<10>();

    // class example
    FixedArray<int, 5> myArray;

    myArray.set(0, 10);
    myArray.set(1, 20);
    myArray.set(2, 30);
    myArray.set(3, 40);
    myArray.set(4, 50);

    for (int i = 0; i < 5; i++)
    {
        cout << myArray.get(i) << " ";
    }

    return 0;
}