#include <iostream>

using namespace std;

class Box
{
private:
    double length;
    double breadth;
    double height;

public:
    static int objectCount;

    Box(double l = 2.0, double b = 2.0, double h = 2.0)
    {
        // Increase every time object is created
        objectCount++;

        cout << "Constructor called: " << objectCount << endl;

        length = l;
        breadth = b;
        height = h;
    }

    double Volume()
    {
        return length * breadth * height;
    }

    // ststic member function - to access static data member
    static void showObjectCount()
    {
        cout << "\nTotal obejcts : " << objectCount << "\n\n";
    }
};

// Initialize static member of class Box
int Box::objectCount = 0;

int main(void)
{
    Box Box1(3.3, 1.2, 1.5);
    Box Box2(8.5, 6.0, 2.0);
    Box Box3(10, 20, 30);

    // Print total number of objects.
    Box::showObjectCount(); // No object needed

    cout << "Volume of box 1 : " << Box1.Volume() << endl;
    cout << "Volume of box 2 : " << Box2.Volume() << endl;

    return 0;
}