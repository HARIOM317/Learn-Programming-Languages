#include <iostream>

using namespace std;

class Animal
{
public:
    // virtual function
    virtual void speak()
    {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal
{
public:
    // override function
    void speak() override
    {
        cout << "Dog barks" << endl;
    }
};

int main()
{
    // Runtime polymorphism
    Animal *a = new Dog();
    a->speak(); // call object class (Dog) function

    return 0;
}