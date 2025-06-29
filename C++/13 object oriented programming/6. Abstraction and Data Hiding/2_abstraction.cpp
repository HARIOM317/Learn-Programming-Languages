#include <iostream>

using namespace std;

// Abstract class
class Shape
{
public:
    // pure virtual function
    virtual void draw() = 0;
};

class Circle : public Shape
{
public:
    void draw() override
    {
        cout << "Drawing a circle..." << endl;
    }
};

class Square : public Shape
{
public:
    void draw() override
    {
        cout << "Drawing a square..." << endl;
    }
};

int main()
{
    Shape *s1 = new Circle();
    s1->draw();

    Shape *s2 = new Square();
    s2->draw();

    return 0;
}