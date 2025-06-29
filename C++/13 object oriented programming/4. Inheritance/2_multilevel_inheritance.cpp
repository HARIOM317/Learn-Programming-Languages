#include <iostream>

using namespace std;

// Parent class
class LivingBeing
{
public:
    void breath()
    {
        cout << "Breathing..." << endl;
    }
};

// Super Child class
class Animal : public LivingBeing
{
public:
    void eat()
    {
        cout << "Eating..." << endl;
    }
};

// Child class
class Dog : public Animal
{
public:
    void bark()
    {
        cout << "Barking..." << endl;
    }
};

int main()
{
    Dog tomy;
    tomy.breath(); // From LivingBeing
    tomy.eat();    // From Animal
    tomy.bark();   // Own Method

    return 0;
}