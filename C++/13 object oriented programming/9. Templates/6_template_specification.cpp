#include <iostream>
using namespace std;

// NOTE: When you want custom behavior for specific types
template <typename T>
class Printer
{
public:
    void print(T val)
    {
        cout << "Value: " << val << endl;
    }
};

// Specification for std::string
template <>
class Printer<string>
{
public:
    void print(string val)
    {
        cout << "String value: " << val << endl;
    }
};

int main()
{
    Printer<int> p1;
    p1.print(100);

    Printer<string> p2;
    p2.print(string("Hello Coders!")); // explicitly convert char* --> string

    return 0;
}