#include <iostream>

using namespace std;

class Animal
{
public:
    void speak()
    {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal
{
public:
    void speak()
    {
        cout << "Dog barks" << endl;
    }
};

int main()
{
    // Not overridden at runtime
    Animal *a = new Dog();
    a->speak(); // call Animal class function

    return 0;
}