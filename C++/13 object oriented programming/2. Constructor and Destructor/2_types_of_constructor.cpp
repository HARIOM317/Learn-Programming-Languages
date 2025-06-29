#include <iostream>

using namespace std;

class Rectangle
{
private:
    int length, width;

public:
    // Default Constructor
    Rectangle() : length(0), width(0)
    {
        cout << "Default Constructor Called!" << endl;
    }

    // Parameterized Constructor
    Rectangle(int l, int w) : length(l), width(w)
    {
        cout << "Parameterized Constructor Called!" << endl;
    }

    // Copy Constructor
    Rectangle(const Rectangle &obj)
    {
        length = obj.length;
        width = obj.width;
        cout << "Copy Constructor Called!" << endl;
    }

    int area()
    {
        return length * width;
    }
};

int main()
{
    Rectangle r1;       // called default constructor
    Rectangle r2(4, 5); // called parameterized constructor
    Rectangle r3(r2);   // called copy constructor

    cout << "Area of r2: " << r2.area() << endl;
    cout << "Area of r3: " << r3.area() << endl;

    return 0;
}