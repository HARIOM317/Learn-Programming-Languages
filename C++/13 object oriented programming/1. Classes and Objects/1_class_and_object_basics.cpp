#include <iostream>

using namespace std;

// Class (A Blueprint or Template)
class Car
{
public:
    string brand;
    int speed;

    void drive()
    {
        cout << "Driving a " << brand << " car at " << speed << " km/h" << endl;
    }
};

int main()
{
    // Class Onject
    Car c1;
    c1.brand = "BMW";
    c1.speed = 320;
    c1.drive();

    return 0;
}