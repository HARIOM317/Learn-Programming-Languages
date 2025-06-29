#include <iostream>

using namespace std;

class Workshop
{
public:
    void repair(string car)
    {
        cout << "Repairing " << car << " car" << endl;
    }

    void repair(string car, string engine)
    {
        cout << "Repairing " << car << " car with engine: " << engine << endl;
    }

    void repair(string car, string engine, string owner)
    {
        cout << "Repairing " << car << " car with engine: " << engine << " owned by " << owner << endl;
    }
};

int main()
{
    Workshop w;

    w.repair("Honda");
    w.repair("Honda", "Petrol");
    w.repair("Honda", "Petrol", "Hariom Singh");

    return 0;
}