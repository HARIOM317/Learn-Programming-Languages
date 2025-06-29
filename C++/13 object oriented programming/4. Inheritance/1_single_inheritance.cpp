#include <iostream>

using namespace std;

// Base Class
class Vehicle
{
public:
    void start()
    {
        cout << "Vehicle started." << endl;
    }
};

// Derived Class
class Car : public Vehicle
{
public:
    void drive()
    {
        cout << "Car is driving..." << endl;
    }
};

int main()
{
    Car c;
    c.start(); // From Vehical
    c.drive(); // Own Method

    return 0;
}