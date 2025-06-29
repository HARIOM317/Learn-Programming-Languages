#include <iostream>
using namespace std;

template <typename T = int> // default type integer

class ValueHolder
{
    T value;

public:
    ValueHolder(T v) : value(v) {}

    void display() { cout << "Value: " << value << endl; }
};

int main()
{
    ValueHolder<> vh(10); // Uses default type int
    vh.display();

    ValueHolder<string> vh2("C++");
    vh2.display();

    return 0;
}