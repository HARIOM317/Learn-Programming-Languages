#include <iostream>
// object like macro
#define PI 3.14159

using namespace std;

double areaOfCircle(double radius)
{
    return PI * radius * radius;
}

int main()
{
    double r;
    cout << "Enter Radius: ";
    cin >> r;
    cout << "Area of circle: " << areaOfCircle(r) << endl;

    return 0;
}