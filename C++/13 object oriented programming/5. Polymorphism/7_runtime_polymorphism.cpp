#include <iostream>

using namespace std;

class Shape
{
public:
    // virtual function
    virtual void draw()
    {
        cout << "Drawing Shape" << endl;
    }
};

class Circle : public Shape
{
public:
    // override function
    void draw() override
    {
        cout << "Drwaing Circle" << endl;
    }
};

void render(Shape *s)
{
    s->draw(); // Runtime Polymorphism
}

int main()
{
    Circle c;
    render(&c); // Runtime Polymorphism

    return 0;
}