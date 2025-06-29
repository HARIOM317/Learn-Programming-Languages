#include <iostream>

using namespace std;

class Car
{
public:
    string name;
    string color;
    int *mileage;

    Car(string name, string color, int mileage)
    {
        this->name = name;
        this->color = color;

        // allocate memory in heap
        this->mileage = new int;
        *this->mileage = mileage;
    }

    // Custom Copy Constructor
    Car(Car &original)
    {
        name = original.name;
        color = original.color;

        // Deep Copy - allocate new memory for new mileage
        mileage = new int;
        *mileage = *original.mileage; // copying value of mileage
    }

    // Destructor
    ~Car()
    {
        cout << "Deleting object...\n";
        // deallocate heap memory
        if (mileage != NULL)
        {
            delete mileage;
        }
    }
};

int main()
{
    Car c1("BMW", "White", 35);

    Car c2(c1); // custom copy constructor

    cout << "C2 name : " << c2.name << endl;
    cout << "C2 color : " << c2.color << endl;
    cout << "C2 mileage : " << *c2.mileage << endl;

    // update c2 mileage
    *c2.mileage = 50;
    cout << "\nC2 new mileage : " << *c2.mileage << endl;
    cout << "C1 old mileage : " << *c1.mileage << "\n\n";

    return 0;
}